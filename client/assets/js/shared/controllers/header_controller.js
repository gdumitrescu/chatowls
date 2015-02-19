/* global app, angular */

(function() {

	"use strict";

	app.controller("HeaderController", function($scope) {
		$scope.langs = [{
			code: "ar",
			name: "Arabic"
		}, {
			code: "az",
			name: "Azerbaijani"
		}, {
			code: "be",
			name: "Belarusian"
		}, {
			code: "bg",
			name: "Bulgarian"
		}, {
			code: "bs",
			name: "Bosnian"
		}, {
			code: "ca",
			name: "Catalan"
		}, {
			code: "cs",
			name: "Czech"
		}, {
			code: "da",
			name: "Danish"
		}, {
			code: "de",
			name: "German"
		}, {
			code: "el",
			name: "Greek"
		}, {
			code: "en",
			name: "English"
		}, {
			code: "es",
			name: "Spanish"
		}, {
			code: "et",
			name: "Estonian"
		}, {
			code: "fi",
			name: "Finnish"
		}, {
			code: "fr",
			name: "French"
		}, {
			code: "he",
			name: "Hebrew"
		}, {
			code: "hr",
			name: "Croatian"
		}, {
			code: "hu",
			name: "Hungarian"
		}, {
			code: "hy",
			name: "Armenian"
		}, {
			code: "id",
			name: "Indonesian"
		}, {
			code: "is",
			name: "Icelandic"
		}, {
			code: "it",
			name: "Italian"
		}, {
			code: "ka",
			name: "Georgian"
		}, {
			code: "lt",
			name: "Lithuanian"
		}, {
			code: "lv",
			name: "Latvian"
		}, {
			code: "mk",
			name: "Macedonian"
		}, {
			code: "ms",
			name: "Malay"
		}, {
			code: "mt",
			name: "Maltese"
		}, {
			code: "nl",
			name: "Dutch"
		}, {
			code: "no",
			name: "Norwegian"
		}, {
			code: "pl",
			name: "Polish"
		}, {
			code: "pt",
			name: "Portuguese"
		}, {
			code: "ro",
			name: "Romanian"
		}, {
			code: "ru",
			name: "Russian"
		}, {
			code: "sk",
			name: "Slovak"
		}, {
			code: "sl",
			name: "Slovenian"
		}, {
			code: "sq",
			name: "Albanian"
		}, {
			code: "sr",
			name: "Serbian"
		}, {
			code: "sv",
			name: "Swedish"
		}, {
			code: "th",
			name: "Thai"
		}, {
			code: "tr",
			name: "Turkish"
		}, {
			code: "uk",
			name: "Ukrainian"
		}, {
			code: "vi",
			name: "Vietnamese"
		}, {
			code: "zh",
			name: "Chinese"
		}];

		if ("currentUser" in localStorage) {
			$scope.data = JSON.parse(localStorage.getItem("currentUser"));
			angular.forEach($scope.langs, function(value, key) {
				if ($scope.langs[key].code == $scope.data.lang) {
					$scope.locale = $scope.langs[key];
				}
			});
		}

		$scope.update = function(code) {
			var data = JSON.parse(localStorage.getItem("currentUser"));
			data.lang = code;
			localStorage.setItem("currentUser", JSON.stringify(data));
		};

	});

}());
