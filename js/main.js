var ketQua = 0,
    bien2Num = 0,
         
    sign = "",
    setSign = false;

    bien1 = "",    op1 = "",      
    bien2 = "",    op2 = "",

    setedOp1 = false,
    setedBien2 = false,

    past = "",
    lastOp = "";
    lastBien1 = "";



/************************************************* */





function operator(input){

    document.getElementById("ketQua").value = ketQua;

    /***  Phần đặt toán tử 1 
     ***  Khi chưa đặt toán tử 1
     ***  Và chưa đặt Biến 2
     ***/
    if(/*setedOp1 === false && */setedBien2 === false){
        console.log('Operator trường hợp 1');
        console.log('setedOp1: ' + setedOp1);
        console.log('setedBien2: ' + setedBien2);

        if(op1 === ""){
            console.log('op1 rỗng')
            op1 = input;
            setedOp1 = true;

            document.getElementById("toanTu").value = op1;
            console.log('Phần đặt toán tử 1, op1: ' + op1);
            console.log('setedOp1: ' + setedOp1);
            console.log('setedBien2: ' + setedBien2);

            lastOp = op1;
        }

        /*** Phần đặt dấu ***/
        else{
            console.log('op1 không rỗng')
            // Dấu không thể là nhân, chia.
            if(input !== "/" && input !== "*"){
                // Nếu không có dấu thì thôi.
                if(sign === ""){
                    sign = input;
                    console.log('Mới có dấu, sign: ' + sign);
                }
                // Cùng '+', khác '-'
                else if (sign === '+'){
                    console.log('sign cũ: ' + sign);
                    console.log('sign nhập: ' + input);
                    input==='+'? sign = '+' : sign = '-';
                    console.log('sign mới: ' + sign);
                }
                else{
                    console.log('sign cũ: ' + sign);
                    console.log('sign nhập: ' + input);
                    input==='+'? sign = '-' : sign = '+';
                    console.log('sign mới: ' + sign);
                }
            }
            setedOp1 = true;
            
            console.log('Kết thúc phần đặt dấu, sign: ' + sign);

            sign==='-' ? document.getElementById("bien").value = sign : document.getElementById("bien").value = "";
        }
    }

    /*** Phần kết thúc
     *** Khi đã đặt toán tử 1
     *** Và đã đặt biến 2
     ***/
    else if(setedOp1 === true && setedBien2 === true ){
        console.log('Operator trường hợp 2');
        console.log('setedOp1: ' + setedOp1);
        console.log('setedBien2: ' + setedBien2);

        /*** Phần đặt toán tử 2 ***/
        op2 = input;
        console.log('Phần đặt toán tử 2, op2 = ' + op2);
        document.getElementById("toanTu").value = op2;

        // Lấy biến 1 (bien1Num)
        console.log('Phần tính kết quả, bien1: ' + bien1);
        var bien1Num;
        bien1 !== "" ? bien1Num = Number(bien1) : bien1Num = 0;
        bien1 !== "" ? lastBien1 = bien1 : lastBien1 = "0";
        bien1 = "";

        /*** Phần tính kết quả ***/
        switch(op1){

            case '+':   
            ketQua = bien1Num + bien2Num;
            document.getElementById("ketQua").value = String(ketQua);  
            console.log(ketQua); 
            break;

            case '-':   
            ketQua = bien1Num - bien2Num;   
            document.getElementById("ketQua").value = String(ketQua);  
            console.log(ketQua);   
            break;

            case '*':   
            ketQua = bien1Num * bien2Num;   
            document.getElementById("ketQua").value = String(ketQua);  
            console.log(ketQua);   
            break;

            case '/':   
            ketQua = bien1Num / bien2Num;   
            document.getElementById("ketQua").value = String(ketQua);    
            console.log(ketQua); 
            break;
        }

        /*** Thêm kết quả vào history ***/
        lastOp = op1;
        past += lastBien1 + " " + lastOp + " " + bien2 + " = " + String(ketQua) + "<br\><br\>";
        document.getElementById("content").innerHTML = past;
        console.log(past);
        
        /*** Phần reset các biến ***/
        bien1 = String(ketQua);
        bien2 = "";
        op1 = op2;
        op2 = "";
        sign = "";
        setedBien2 = false;
        setSign = false;
        document.getElementById("bien").value = bien2;
    }

    /*** Phần kết thúc
     *** Khi chưa đặt toán tử 1
     *** Nhưng đã đặt biến 2 
     *** Chỉ xảy ra khi mới bắt đầu nhập.
     ***/
    else if(setedOp1 === false && setedBien2 === true){
        console.log('Operator trường hợp 3');
        console.log('setedOP1: ' + setedOp1);
        console.log('setedBien2: ' + setedBien2);

        // Phần tính kết quả.
        // ketQua += bien2 = bien2.

        // Coi biến 2 là biến 1 và chưa đặt biến 2.
        bien1 = bien2;
        bien2 = "";
        setedBien2 = false;
        document.getElementById("ketQua").value = bien1;
        document.getElementById("bien").value = bien2;

        // Lấy toán tử 2 như toán tử 1.
        op1 = input;
        setedOp1 = true;
        document.getElementById("toanTu").value = op1;
        console.log('Phần đặt toán tử 1, op1: ' + op1);
        
        past += bien1 + "<br\n><br\n>";
        document.getElementById("content").innerHTML = past;

        // /*** Phần đặt dấu ***/
        // if(op1 !== ""){
        // // Dấu không thể là nhân, chia.
        // if(input !== "/" && input !== "*"){
        //     // Nếu không có dấu thì thôi.
        //         if(sign === ""){
        //             sign = input;
        //         }
        //         // Cùng '+', khác '-'
        //         else if (sign === '+'){
        //             input==='+'? sign = '+' : sign = '-';
        //         }
        //         else{
        //             input==='+'? sign = '-' : sign = '+';
        //         }
        //     }
    
        //     setedBien2 = false;
    
        //     console.log('Phần đặt dấu, sign: ' + sign);
        //     console.log('setedOp1: ' + setedOp1);
    
        //     sign==='-' ? document.getElementById("bien").value = sign : document.getElementById("bien").value = "";
        // }

    }
    

}














/*** Phần đặt biến 2 ***/
function num(input){
    
    // Xóa dấu đang ở ô phải.
    document.getElementById("bien").value = "";

    // Gán dấu ấy vào chuỗi.
    // Nếu dấu ấy là dấu '+' thì khỏi gán.
    if(setSign === false && sign === '-'){
        bien2 = sign + bien2 + input;
        setSign = true;
    }
    else{
        bien2 += input;
    }

    bien2Num = Number(bien2);

    // Đã gán xong biến 2.
    setedBien2 = true;

    document.getElementById("bien").value = bien2;
    console.log('Phần đặt biến 2, bien2Num: ' + bien2Num);
    console.log('Phần đặt biến 2, setedOp1: ' + setedOp1);
    console.log('Phần đặt biến 2, setedBien2: ' + setedBien2);

    if(op1 === ""){
        document.getElementById("ketQua").value = "";
    }
}















function finish(){
    if(setedOp1 === true && setedBien2 === true ){
        /*** Phần tính kết quả ***/
        console.log('Hàm finish, tính kết quả, bien1: ' + bien1);
        console.log('Hàm finish, tính kết quả, bien2: ' + bien2);

        var bien1Num;
        bien1 !== "" ? bien1Num = Number(bien1) : bien1Num = 0;
        bien1 !== "" ? lastBien1 = bien1 : lastBien1 = "0";
        bien1 = "";

        switch(op1){

            case '+':   
            ketQua = bien1Num + bien2Num;
            document.getElementById("ketQua").value = String(ketQua);  
            console.log(ketQua); 
            break;

            case '-':   
            ketQua = bien1Num - bien2Num;   
            document.getElementById("ketQua").value = String(ketQua);  
            console.log(ketQua);   
            break;

            case '*':   
            ketQua = bien1Num * bien2Num;   
            document.getElementById("ketQua").value = String(ketQua);  
            console.log(ketQua);   
            break;

            case '/':   
            ketQua = bien1Num / bien2Num;   
            document.getElementById("ketQua").value = String(ketQua);    
            console.log(ketQua); 
            break;

            case '': 
            ketQua = bien2Num;
            document.getElementById("ketQua").value = String(ketQua);
        }

        /*** Thêm kết quả vào history ***/
        lastOp = op1;
        past += lastBien1 + " " + lastOp + " " + bien2 + " = " + String(ketQua) + "<br\><br\>";
        document.getElementById("content").innerHTML = past;
        console.log(past);
    }



    else if(setedOp1 === false && setedBien2 === true){
        // Coi biến 2 là biến 1 và chưa đặt biến 2.
        bien1 = bien2;
        bien2 = "";
        setedBien2 = false;
        document.getElementById("ketQua").value = bien1;
        document.getElementById("bien").value = bien2;

        past += bien1 + "<br\n><br\n>";
        document.getElementById("content").innerHTML = past;        
    }
    

    /*** Phần reset các biến ***/
    bien1 = String(ketQua);
    bien2 = "";
    op1 = "";
    op2 = "";
    sign = "";
    setSign = false;
    setedOp1 = false;
    setedBien2 = false;
    document.getElementById("toanTu").value = op1;
    document.getElementById("bien").value = bien2;
}














function erase(){
    
    // Xóa dấu đang ở ô phải.
    document.getElementById("bien").value = "";

    // Xóa ký tự cuối.
    bien2 = bien2.substring(0, bien2.length - 1);
    bien2Num = Number(bien2);

    document.getElementById("bien").value = bien2;
    console.log('Phần đặt biến 2, setedOp1: ' + setedOp1);    
}














function eraseAll(){
    ketQua = 0,
    bien2Num = 0,
     
    sign = "",
    setSign = false;

    bien1 = "",    op1 = "",      
    bien2 = "",    op2 = "",

    setedOp1 = false,
    setedBien2 = false,

    history = "",
    haveHis = false,

    past = "",
    lastOp = "";
    lastBien1 = "";



    document.getElementById("ketQua").value = bien1;
    document.getElementById("toanTu").value = op1;
    document.getElementById("bien").value = bien2; 
    document.getElementById("content").innerHTML = past;   
}




function anName(){
    document.getElementById("name").style.display = "none";
    document.getElementById("header").style.display = "flex";
    document.getElementById("content").style.display = "flex";
}

function hienName(){
    document.getElementById("name").style.display = "flex";
    document.getElementById("header").style.display = "none";
    document.getElementById("content").style.display = "none";
}
