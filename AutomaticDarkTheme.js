// ==UserScript==
// @name Knewest's Dark Theme For Japan Rabbit
// @version 1.0
// @description  Creates a functional dark theme for Japan Rabbit. 
// @source https://github.com/Knewest/Dark-Theme-For-Japan-Rabbit
// @author Knewest
// @run-at document-start
// @match *://*.japanrabbit.com/*
// ==/UserScript==

(function() {
    'use strict';

    const css = `
	html {
	background-color: black !important; /**This is important, otherwise there is a chance the user will be "flash-banged" suddenly.**/
	}

	#front-chat-container .fc-3xgLq {
	background-color: #9B1C14 !important;
	}

	.v-application--wrap, .bg-white {
	background: black !important;
	}

	.v-card > :first-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
	background: #0F0F0F !important;
	color: #FFFFFF !important;
	}

	.v-card > :last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
	background: #212121 !important;
	color: #FFFFFF !important;
	}

	.theme--light.v-sheet--outlined {
	border: thin solid rgba(0,0,0,.12) !important;
	}

	.v-list-item__icon, .v-list-item__content, .v-list-item__title, .v-list-item__subtitle {
	color: #FFFFFF !important;
	}

	.v-toolbar__content {
	background: #E32C1B !important;
	color: white !important;
	}

	#app :is(.bg-white), #app :is(.bg-card) {
	background-color: rgb(0 0 0 / var(--tw-bg-opacity)) !important;
	color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
	}

	.mr-2, .p-4 {
	color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
	}

	.v-icon, .ml-4, .pb-2, .v-toolbar__items, .v-btn__content {
	color: rgb(255 255 255) !important;
	}

	.v-application .primary--text {
	color: rgb(255 255 255) !important;
	}

	.v-application a {
	color: #E32C1B !important;
	}

	.v-application .black--text {
	color: rgb(255 255 255) !important;
	}
    `;

	const styleElem = document.createElement('style');
	styleElem.textContent = css;
	styleElem.id = "EnableDarkThemeStyle";
	document.head.appendChild(styleElem);

    function renameClass() {
        document.querySelectorAll('.theme--light').forEach(el => {
            el.classList.remove('theme--light');
            el.classList.add('theme--dark');
        });
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                renameClass();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });

    renameClass();

})();
