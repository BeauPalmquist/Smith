/*
    HomeDepot.Platform.Analytics.Microservice ClientAction API version 1.0.2-build020
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

            var currentTime = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Analytics.Microservice/1.0.2-build020/ClientAction/currentTime';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var fetch = function(id) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Analytics.Microservice/1.0.2-build020/ClientAction/fetch';

                if (typeof id !== 'undefined' && id !== null)
                    url += '/' + encodeURIComponent(id);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
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

            var log = function(description, category, data, offsetSeconds) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Analytics.Microservice/1.0.2-build020/ClientAction/log';

                var postArgs = {};
                postArgs.description = (description === undefined ? null : description);
                postArgs.category = (category === undefined ? null : category);
                postArgs.data = (data === undefined ? null : data);
                postArgs.offsetSeconds = (offsetSeconds === undefined ? null : offsetSeconds);

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var logMany = function(entries) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Analytics.Microservice/1.0.2-build020/ClientAction/logMany';

                var postArgs = {};
                postArgs.entries = (entries === undefined ? null : entries);

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
                currentTime: currentTime,
                fetch: fetch,
                log: log,
                logMany: logMany
            }
        })();