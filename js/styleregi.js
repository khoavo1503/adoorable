function ktrTenDN(){
	var reg = /^[a-z0-9_-]{3,16}$/
	var name = document.getElementById("user").value;
	if(name == "" || name == null){
		document.getElementById("usn").innerHTML = "Tên tài khoản là bắt buộc";
		return false;
	}else{
		if(reg.test(name)){
			document.getElementById("usn").innerHTML = "";
			return true;
		}else{
			document.getElementById("usn").innerHTML = "Tên nhập sai";
			return false;
		}
	}
	
}
function ktrMatkhau(){
	var reg = /^[A-Za-z0-9(!@#$%^&*()_)]{6,20}$/;
	var pass = document.getElementById("pwd").value;
		if(pass == "" || pass == null){
		document.getElementById("psw").innerHTML = "Mật khẩu là bắt buộc";
		return false;
	}else{
		if(reg.test(pass)){
			document.getElementById("psw").innerHTML = "";
			return true;
		}else{
			document.getElementById("psw").innerHTML = "Mật khẩu không đúng";
			return false;
		}
	}
}
function ktrMatkhauXN(){
	var p = document.getElementById("pwd").value;
	var pass = document.getElementById("pwxn").value;
		if(pass == "" || pass == null){
		document.getElementById("pxn").innerHTML = "Mật khẩu là bắt buộc";
		return false;
	}else{
		if(p == pass){
			document.getElementById("pxn").innerHTML = "";
			return true;
		}else{
			document.getElementById("pxn").innerHTML = "Mật khẩu không đúng";
			return false;
		}
	}
}
function ktremail(){
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email = document.getElementById("mail").value;
	if(email == "" || email == null){
		document.getElementById("email").innerHTML = "Email là bắt buộc";
		return false;
	}else{
		if(reg.test(email)){
			document.getElementById("email").innerHTML = "";
			return true
		}else{
			document.getElementById("email").innerHTML = "Email không đúng";
		}
	}
}