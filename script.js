$(document).ready(function(){
    $("#h1").click(function(){
         alert("You Click h1");
    })

    $("#myH2").click(function(){
         alert("You click h2");
    });
    $("#btnSubmit").click(function(){
        let name = $("#name").val()
        alert(name)
        $("#myH2").text(name)
    });
});