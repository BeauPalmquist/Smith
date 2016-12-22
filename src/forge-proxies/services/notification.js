/*
    HomeDepot.Platform.Notification.Microservice Notification API version 1.0.2-build020
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

            var fetch = function(id) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Notification.Microservice/1.0.2-build020/Notification/fetch';

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

            var loadChannelNotifications = function(channel, step, take) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Notification.Microservice/1.0.2-build020/Notification/loadChannelNotifications';

                if (typeof channel !== 'undefined' && channel !== null)
                    url += '/' + encodeURIComponent(channel);
                if (typeof step !== 'undefined' && step !== null)
                    url += '/' + encodeURIComponent(step);
                if (typeof take !== 'undefined' && take !== null)
                    url += '/' + encodeURIComponent(take);

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

            var loadSystemNotifications = function(step, take) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Notification.Microservice/1.0.2-build020/Notification/loadSystemNotifications';

                if (typeof step !== 'undefined' && step !== null)
                    url += '/' + encodeURIComponent(step);
                if (typeof take !== 'undefined' && take !== null)
                    url += '/' + encodeURIComponent(take);

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

            var loadUserNotifications = function(step, take) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Notification.Microservice/1.0.2-build020/Notification/loadUserNotifications';

                if (typeof step !== 'undefined' && step !== null)
                    url += '/' + encodeURIComponent(step);
                if (typeof take !== 'undefined' && take !== null)
                    url += '/' + encodeURIComponent(take);

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

            var loadUserOperationNotifications = function(step, take) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Notification.Microservice/1.0.2-build020/Notification/loadUserOperationNotifications';

                if (typeof step !== 'undefined' && step !== null)
                    url += '/' + encodeURIComponent(step);
                if (typeof take !== 'undefined' && take !== null)
                    url += '/' + encodeURIComponent(take);

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

            var sendSystemNotification = function(message, type) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Notification.Microservice/1.0.2-build020/Notification/sendSystemNotification';

                var postArgs = {};
                postArgs.message = (message === undefined ? null : message);
                postArgs.type = (type === undefined ? null : type);

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


            return {
                setOptions: setOptions,
                fetch: fetch,
                loadChannelNotifications: loadChannelNotifications,
                loadSystemNotifications: loadSystemNotifications,
                loadUserNotifications: loadUserNotifications,
                loadUserOperationNotifications: loadUserOperationNotifications,
                sendSystemNotification: sendSystemNotification
            }
        })();