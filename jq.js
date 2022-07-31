$(document).ready(function (){
    $(".bdcontainer").show();
    // adding main continue button behavear
    $("#mainContinueB").click(()=>{showAndHide("mainbox")});
    $("#goldclick").click(()=>{putResult()});
    $("#silverclick").click(()=>{silverData()});
    $("#cashclick").click(()=>{totalData()});
    // some variables
    const gold = $("#gold").val();
    const silver = $("#silver").val();
    // functions area
     // show and hide function
    function showAndHide(){
        $(".text").fadeOut("slow");
        $(".mainbox").fadeIn("slow");
    }
    // function for gold
    function putResult(){
        const gold = $("#gold").val();
        $("#goldh2").html(gold);
        if(gold < 7.5){
            $("#goldp").html("No Zakat");
        }else{
            $("#goldp").html("Zakat: " + gold*120000/40);
        }
        $("#goldbox").fadeOut("slow");
        $("#silverbox").fadeIn("slow");
        $("#step1").removeClass("stepActive");
        $("#step2").addClass("stepActive");

        
    }
    function silverData(){
        const silver = $("#silver").val();
        $("#silverh2").html(silver);
        if(silver < 52.5){
            $("#silverp").html("No Zakat");
        }else{
            $("#silverp").html("Zakat: " + silver*1500/40);
        }
        $("#silverbox").fadeOut("slow");
        $("#cashbox").fadeIn("slow");
        $("#step2").removeClass("stepActive");
        $("#step3").addClass("stepActive");

        
    }
    function totalData(){
        let cash = $("#cash").val();
        $("#cashh2").html(cash);
        if(cash < 52.5*1500){
            $("#cashp").html("No Zakat");
        }else{
            $("#cashp").html(cash/40);
        }
        let gp = gold*120000/40;
        let sp = silver*1500/40;
        let total = gp+sp+cash;
        console.log(gp);
        
        if(total < 52.5*1500){
            $("#totalz").html("No Zakat");
        }else{
            $("#totalz").html(total);
        }
       // $("#silverbox").fadeOut("slow");
       // $("#cashbox").fadeIn("slow");
       // $("#step2").removeClass("stepActive");
       // $("#step3").addClass("stepActive");

        
    }
    // end functions area
});