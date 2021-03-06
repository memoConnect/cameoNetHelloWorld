/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

        var win = function (result) {
            alert(JSON.stringify(result));
        };

        var fail = function (error) {
            alert("ERROR: " + error);
        };

        //window.hello.generateKeyPair(win, fail, 2048);
        //console.dir(window.hello.foo);

        var nacl = nacl_factory.instantiate();
        alert(nacl.to_hex(nacl.random_bytes(16)));

        var start = Date.now()
        var keypair1 = nacl.crypto_box_keypair()
        var timeKeypair = Date.now() - start
        var keypair2 = nacl.crypto_box_keypair()


        start = Date.now()
        var message = nacl.encode_utf8("MoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepMoepv");
        var nonce = nacl.crypto_box_random_nonce();
        var encrypted = nacl.crypto_box(message, nonce, keypair2.boxPk, keypair1.boxSk);
        var timeEncrypt = Date.now() - start

        start = Date.now()
        var decrypted = nacl.crypto_box_open(encrypted, nonce, keypair1.boxPk, keypair2.boxSk);
        var timeDecrypt = Date.now() - start

        alert("genKeyPair: " + timeKeypair +"\nencrypt: " + timeEncrypt+"\ndecrypt: " + timeDecrypt)
        alert(JSON.stringify(encrypted))

    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();