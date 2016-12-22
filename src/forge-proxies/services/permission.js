/*
    HomeDepot.Platform.Identity.Microservice Permission API version 1.0.2-build020
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

            var deleteRolePermission = function(id) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Permission/deleteRolePermission';

                if (typeof id !== 'undefined' && id !== null)
                    url += '/' + encodeURIComponent(id);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'DELETE',
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

            var deleteUserPermission = function(id) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Permission/deleteUserPermission';

                if (typeof id !== 'undefined' && id !== null)
                    url += '/' + encodeURIComponent(id);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'DELETE',
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

            var fetch = function(id) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Permission/fetch';

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

            var apiPermissions = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Permission/apiPermissions';

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

            var featureFlagPermissions = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Permission/featureFlagPermissions';

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

            var routePermissions = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Permission/routePermissions';

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


            return {
                setOptions: setOptions,
                deleteRolePermission: deleteRolePermission,
                deleteUserPermission: deleteUserPermission,
                fetch: fetch,
                apiPermissions: apiPermissions,
                featureFlagPermissions: featureFlagPermissions,
                routePermissions: routePermissions
            }
        })();