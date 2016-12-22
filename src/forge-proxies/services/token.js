/*
    HomeDepot.Platform.Identity.Microservice Token API version 1.0.2-build020
    This code is auto-generated.  Any modificaions will be overwritten.
*/

import ajax from '../support/ajax';
import { Promise } from 'es6-promise';
import Auth from '../support/auth';
import Token from './token';
    
        export default (function() {
            var entityOptions = {
                baseUri: '/',
                environment: 'dev-forge'
            };

            var setOptions = function (options) {
                entityOptions.baseUri = options.baseUri || '';

                if (entityOptions.baseUri.length && entityOptions.baseUri[entityOptions.baseUri.length - 1] != '/')
                    entityOptions.baseUri = entityOptions.baseUri + '/';
            };

            var refresh = function(token) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Token/refresh';

                var postArgs = {};
                postArgs.token = (token === undefined ? null : token);

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var revoke = function(__instanceId) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Token/revoke/' + __instanceId;

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var validate = function(token) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Token/validate';

                var postArgs = {};
                postArgs.token = (token === undefined ? null : token);

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };


            return {
                setOptions: setOptions,
                refresh: refresh,
                revoke: revoke,
                validate: validate
            }
        })();