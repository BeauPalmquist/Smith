/*
    HomeDepot.Platform.Identity.Microservice User API version 1.0.2-build020
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

            var add = function(userName, firstName, lastName, email, initialPassword, roles, phoneNumber) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/add';

                var postArgs = {};
                postArgs.userName = (userName === undefined ? null : userName);
                postArgs.firstName = (firstName === undefined ? null : firstName);
                postArgs.lastName = (lastName === undefined ? null : lastName);
                postArgs.email = (email === undefined ? null : email);
                postArgs.initialPassword = (initialPassword === undefined ? null : window.btoa(initialPassword));
                postArgs.roles = (roles === undefined ? null : roles);
                postArgs.phoneNumber = (phoneNumber === undefined ? null : phoneNumber);

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

            var addFeaturePermission = function(__instanceId, application, feature) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/addFeaturePermission/' + __instanceId;

                if (typeof application !== 'undefined' && application !== null)
                    url += '/' + encodeURIComponent(application);
                if (typeof feature !== 'undefined' && feature !== null)
                    url += '/' + encodeURIComponent(feature);

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

            var addMany = function(users) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/addMany';

                var postArgs = {};
                postArgs.users = (users === undefined ? null : users);

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

            var addOrUpdate = function(userName, firstName, lastName, email, initialPassword, roles, phoneNumber) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/addOrUpdate';

                var postArgs = {};
                postArgs.userName = (userName === undefined ? null : userName);
                postArgs.firstName = (firstName === undefined ? null : firstName);
                postArgs.lastName = (lastName === undefined ? null : lastName);
                postArgs.email = (email === undefined ? null : email);
                postArgs.initialPassword = (initialPassword === undefined ? null : window.btoa(initialPassword));
                postArgs.roles = (roles === undefined ? null : roles);
                postArgs.phoneNumber = (phoneNumber === undefined ? null : phoneNumber);

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

            var addOrUpdateMany = function(users) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/addOrUpdateMany';

                var postArgs = {};
                postArgs.users = (users === undefined ? null : users);

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

            var addToRole = function(__instanceId, role) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/addToRole/' + __instanceId;

                if (typeof role !== 'undefined' && role !== null)
                    url += '/' + encodeURIComponent(role);

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

            var changePassword = function(__instanceId, password) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/changePassword/' + __instanceId;

                var postArgs = {};
                postArgs.password = (password === undefined ? null : window.btoa(password));

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

            var deleteImage = function(userId) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/deleteImage';

                if (typeof userId !== 'undefined' && userId !== null)
                    url += '/' + encodeURIComponent(userId);

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

            var disable = function(__instanceId) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/disable/' + __instanceId;

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

            var enable = function(__instanceId) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/enable/' + __instanceId;

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

            var fetch = function(id) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/fetch';

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

            var getActiveSessionUserIdsByIPAddress = function(ipAddress) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getActiveSessionUserIdsByIPAddress';

                if (typeof ipAddress !== 'undefined' && ipAddress !== null)
                    url += '/' + encodeURIComponent(ipAddress);

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

            var getActiveUserCount = function(term) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getActiveUserCount';

                if (typeof term !== 'undefined' && term !== null)
                    url += '/' + encodeURIComponent(term);

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

            var getCurrentUserProfile = function(application) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getCurrentUserProfile';

                if (typeof application !== 'undefined' && application !== null)
                    url += '/' + encodeURIComponent(application);

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

            var getUserClaims = function(__instanceId) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getUserClaims/' + __instanceId;

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

            var getUserImage = function(userId) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getUserImage';

                if (typeof userId !== 'undefined' && userId !== null)
                    url += '/' + encodeURIComponent(userId);

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

            var getUserImageDirect = function(userId) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getUserImageDirect';

                if (typeof userId !== 'undefined' && userId !== null)
                    url += '/' + encodeURIComponent(userId);

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

            var getUserRoles = function(__instanceId) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getUserRoles/' + __instanceId;

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

            var getUsers = function(skip, step, term) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getUsers';

                if (typeof skip !== 'undefined' && skip !== null)
                    url += '/' + encodeURIComponent(skip);
                if (typeof step !== 'undefined' && step !== null)
                    url += '/' + encodeURIComponent(step);
                if (typeof term !== 'undefined' && term !== null)
                    url += '/' + encodeURIComponent(term);

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

            var getUsersByIds = function(ids) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getUsersByIds';

                if (typeof ids !== 'undefined' && ids !== null)
                    url += '/' + encodeURIComponent(ids);

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

            var getUsersByRole = function(role) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getUsersByRole';

                if (typeof role !== 'undefined' && role !== null)
                    url += '/' + encodeURIComponent(role);

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

            var getUsersByRoles = function(roles) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/getUsersByRoles';

                if (typeof roles !== 'undefined' && roles !== null)
                    url += '/' + encodeURIComponent(roles);

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

            var isLoggedIn = function() {
                var promise = new Promise(function(resolve, reject) {
                    var refreshToken = Auth.getRefreshToken();
                    var accessToken = Auth.getToken();
                    if (refreshToken){ 
                        if (!Auth.isTokenValidated()) {
                            Token.validate(refreshToken).then(function(result){
                                if (result){
                                    Auth.setTokenValidated(true);
                                    if(!accessToken){
                                        Token.refresh(refreshToken).then(function () {                                       
                                            resolve(true);
                                        },
                                        function () {
                                            resolve(false);
                                        });
                                    }       
                                    else{
                                        resolve(true);
                                    }                         
                                }
                                else {
                                    Auth.setRefreshToken();                                                            
                                    resolve(false);
                                }                          
                            },
                            function(){
                                Auth.setRefreshToken();                            
                                resolve(false);    
                            });
                        }
                        else {
                            if(!accessToken){
                                Token.refresh(refreshToken).then(function () {                                       
                                    resolve(true);
                                },
                                function () {
                                    resolve(false);
                                });
                            }       
                            else {
                                resolve(true);
                            }                       
                        }
                    }
                    else {
                        resolve(false);
                    }
                });

                return promise;
            };

            var login = function(userName, password) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/login';

                var postArgs = {};
                postArgs.userName = (userName === undefined ? null : userName);
                postArgs.password = (password === undefined ? null : window.btoa(password));
                if (arguments.length > 2) {
                    var args = Array.prototype.slice.call(arguments, 2);
                    if (args.length === 1) {
                        var extraArg = args[0];                       for (var prop in extraArg) {
                           if (extraArg.hasOwnProperty(prop)) {
                                postArgs[prop] = extraArg[prop];                            }
                        }
                    }
                 }

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var logOut = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/logOut';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var removeFeaturePermission = function(__instanceId, application, feature) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/removeFeaturePermission/' + __instanceId;

                if (typeof application !== 'undefined' && application !== null)
                    url += '/' + encodeURIComponent(application);
                if (typeof feature !== 'undefined' && feature !== null)
                    url += '/' + encodeURIComponent(feature);

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

            var removeFromRole = function(__instanceId, role) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/removeFromRole/' + __instanceId;

                if (typeof role !== 'undefined' && role !== null)
                    url += '/' + encodeURIComponent(role);

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

            var replaceImage = function(file) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/replaceImage';

                var postArgs = file;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'multipart/form-data',
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

            var search = function(username) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/search';

                if (typeof username !== 'undefined' && username !== null)
                    url += '/' + encodeURIComponent(username);

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

            var searchInRole = function(role, skip, take, term) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/searchInRole';

                if (typeof role !== 'undefined' && role !== null)
                    url += '/' + encodeURIComponent(role);
                if (typeof skip !== 'undefined' && skip !== null)
                    url += '/' + encodeURIComponent(skip);
                if (typeof take !== 'undefined' && take !== null)
                    url += '/' + encodeURIComponent(take);
                if (term) {
                    if (url.indexOf('?') == -1)
                        url += '?term=' + encodeURIComponent(term);
                    else
                        url += '&term=' + encodeURIComponent(term);
                }

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

            var searchInRoleCount = function(role, term) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/searchInRoleCount';

                if (typeof role !== 'undefined' && role !== null)
                    url += '/' + encodeURIComponent(role);
                if (term) {
                    if (url.indexOf('?') == -1)
                        url += '?term=' + encodeURIComponent(term);
                    else
                        url += '&term=' + encodeURIComponent(term);
                }

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

            var searchToAddToRole = function(role, maxResults, term) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/searchToAddToRole';

                if (typeof role !== 'undefined' && role !== null)
                    url += '/' + encodeURIComponent(role);
                if (typeof maxResults !== 'undefined' && maxResults !== null)
                    url += '/' + encodeURIComponent(maxResults);
                if (term) {
                    if (url.indexOf('?') == -1)
                        url += '?term=' + encodeURIComponent(term);
                    else
                        url += '&term=' + encodeURIComponent(term);
                }

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

            var updateEmail = function(__instanceId, email) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/updateEmail/' + __instanceId;

                var postArgs = {};
                postArgs.email = (email === undefined ? null : email);

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

            var updateName = function(__instanceId, firstName, lastName) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/updateName/' + __instanceId;

                var postArgs = {};
                postArgs.firstName = (firstName === undefined ? null : firstName);
                postArgs.lastName = (lastName === undefined ? null : lastName);

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

            var uploadImage = function(userId, file) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/User/uploadImage';

                if (typeof userId !== 'undefined' && userId !== null)
                    url += '/' + encodeURIComponent(userId);

                var postArgs = file;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'multipart/form-data',
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
                add: add,
                addFeaturePermission: addFeaturePermission,
                addMany: addMany,
                addOrUpdate: addOrUpdate,
                addOrUpdateMany: addOrUpdateMany,
                addToRole: addToRole,
                changePassword: changePassword,
                deleteImage: deleteImage,
                disable: disable,
                enable: enable,
                fetch: fetch,
                getActiveSessionUserIdsByIPAddress: getActiveSessionUserIdsByIPAddress,
                getActiveUserCount: getActiveUserCount,
                getCurrentUserProfile: getCurrentUserProfile,
                getUserClaims: getUserClaims,
                getUserImage: getUserImage,
                getUserImageDirect: getUserImageDirect,
                getUserRoles: getUserRoles,
                getUsers: getUsers,
                getUsersByIds: getUsersByIds,
                getUsersByRole: getUsersByRole,
                getUsersByRoles: getUsersByRoles,
                isLoggedIn: isLoggedIn,
                login: login,
                logOut: logOut,
                removeFeaturePermission: removeFeaturePermission,
                removeFromRole: removeFromRole,
                replaceImage: replaceImage,
                search: search,
                searchInRole: searchInRole,
                searchInRoleCount: searchInRoleCount,
                searchToAddToRole: searchToAddToRole,
                updateEmail: updateEmail,
                updateName: updateName,
                uploadImage: uploadImage
            }
        })();