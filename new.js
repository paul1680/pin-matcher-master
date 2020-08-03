
        function billingFunction(){
    if(document.getElementById("same").checked) {
        let name = document.getElementById("shippingName").value;
        let zipCode = document.getElementById("shippingZip").value;
        document.getElementById("billingName").value = name;
        document.getElementById("billingZip").value = zipCode;
    }
    else{
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
