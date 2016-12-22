import Auth from './auth';
import { Promise } from 'es6-promise';
import AjaxOptions from './ajaxOptions';
export default 
    function ajax(options) {
        var promise = new Promise(function(resolve, reject) {
            var onResponse = function () {
                if (this.readyState != 4)
                    return;

                if (this.status < 400) {
                    if (this.status >= 200 && this.status < 300 && this.status != 204) {
                        var responseType = this.getResponseHeader('Content-Type');
                        var response = this.response || this.responseText;
                        if (responseType && responseType.indexOf('json') > -1) {
                            response = JSON.parse(this.response);
                        }
                        else {
                            response = this.response;
                        }
                    }
                    else {
                        response = this.response;
                    }

                    if (options.usePlatformAuth) {
                        var token = this.getResponseHeader('HomeDepot-Platform-Authorization');
                        if (token) {
                            Auth.setToken(token);
                        }

                        var refreshToken = this.getResponseHeader('HomeDepot-Platform-Authorization-Refresh');
                        if (refreshToken) {
                            Auth.setRefreshToken(refreshToken);
                        }
                        else if (this.getResponseHeader('HomeDepot-Platform-Authorization-Refresh-Remove')) {
                            Auth.setToken();
                            Auth.setRefreshToken();
                        }
                    }

                    resolve(response);
                }
                else {
                    var refreshToken = Auth.getRefreshToken();
                    var errorMessage = this.getResponseHeader('HomeDepot-Platform-Error');
                    var statusText = errorMessage ? errorMessage : this.statusText;

                    if (this.status == 401 && refreshToken && options.authRetry) {
                        var retry = options.authRetry;
                        options.authRetry = null;
                        var retryWork = ajax.bind(null, options);
                        retry(refreshToken, retryWork).then(function (retryResponse) {
                            resolve(retryResponse);
                        },
                        function () {
                            var onRejected = AjaxOptions ? AjaxOptions.getOnRejected() : null;
                            if (onRejected)
                                onRejected(this, this.statusText);
                            reject(this.statusText);
                        });
                    }
                    else {
                        var onRejected = (typeof AjaxOptions !== 'undefined' && AjaxOptions) ? AjaxOptions.getOnRejected() : null;
                        if (onRejected)
                            onRejected(this, statusText);
                        reject(statusText);
                    }
                }
            };

            options = options || {};  
            options.contentType = options.contentType || 'application/json';
            options.type = options.type || 'GET';
            if (typeof options.cache === 'undefined')
                options.cache = true;

            var req = new XMLHttpRequest();

            // CORS: XDomainRequest for IE if needed, set withCredentials to allow cookies.
            if (!('withCredentials' in req) && typeof XDomainRequest != 'undefined')
                req = new XDomainRequest();

            req.onreadystatechange = onResponse;
            req.open(options.type, options.url);
            req.withCredentials = true;
            req.setRequestHeader('Content-type', options.contentType);

            if (options.usePlatformAuth) {
                var token = Auth.getToken();
                if (token)
                    req.setRequestHeader('Authorization', token);
            }

            if (!options.cache)
                req.setRequestHeader('Cache-Control', 'no-cache');

            var postBody;
            if (options.data) {
                if (options.contentType.indexOf('application/json') > -1) {
                    postBody = JSON.stringify(options.data);
                }
                else if (options.contentType.indexOf('multipart/form-data') > -1) {
                    postBody = options.data;
                }
                else {
                    throw 'ajax: Unexpected contentType ' + options.contentType;
                }
            }
            else
                postBody = '';  // IE

            req.send(postBody);
        });

        return promise;
    }