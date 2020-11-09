$('document').ready(()=>{
    $("#pass").blur(()=>{
        var d = $('#pass').val();
        console.log(d);
        var hash = CryptoJS.MD5(d);
        document.getElementById('pass').value = hash;
        var f3 = $('#pass').val();
        console.log(f3);
    })

    $("#cpass").blur(()=>{
        var e = $('#cpass').val();
        var hash1 = CryptoJS.MD5(e);
        document.getElementById('cpass').value = hash1;
        var f = $('#cpass').val();
        console.log(f);
    })
})