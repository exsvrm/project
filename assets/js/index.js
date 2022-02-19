function Exsarmweb___themeDark() {
    $(function() {
        $("body, html").css("background", "rgb(2, 2, 2)")
        $("body, html").css("color", "white")
    })
}

function Exsarmweb___themeLight() {
    $(function() {
        $("body, html").css("background", "rgb(255, 255, 255)")
        $("body, html").css("color", "rgb(2, 2, 2)")
    })
} 

function Exsarmweb___french() {
    $(function() {
        $("#PROJECTS_TEXT").text("Projets")
        $("#LIGHT_THEME").text("Clair")
        $("#DARK_THEME").text("Sombre")
        $("#THEME_TEXT").text("Thème")
        $("#LANGUAGE_TEXT").text("Langue")
        $("#FRENCH_LANG").text("Français")
        $("#ENGLISH_LANG").text("Anglais")
    })
}

function Exsarmweb___english() {
    $(function() {
        $("#PROJECTS_TEXT").text("Projects")
        $("#LIGHT_THEME").text("Light")
        $("#DARK_THEME").text("Dark")
        $("#THEME_TEXT").text("Theme")
        $("#LANGUAGE_TEXT").text("Language")
        $("#FRENCH_LANG").text("French")
        $("#ENGLISH_LANG").text("English")
    })
}

Exsarmweb___themeDark(); Exsarmweb___english();