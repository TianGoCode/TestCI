//A.1
// function Opposite(first_num, n) {



//     if (!n || !first_num) {
//         console.log("ban chua nhap du input!")
//     } else if (!((n >= 4) && (n <= 20) && (n % 2 == 0))) {
//         console.log("ban chua nhap dung n")
//     } else {

//     var arr = new Array
//     for (let i = 0; i < n; i++) {
//         arr.push(i)
//     }

//     if (first_num < (n / 2)) {
//         console.log("số đối diện với số đầu tiên (" + first_num + ") là :" + arr[first_num + (n / 2)])
//     } else if (first_num == (n / 2)) {
//         console.log("số đối diện với số đầu tiên (" + first_num + ") là :" + arr[0])
//     } else {
//         console.log("số đối diện với số đầu tiên (" + first_num + ") là :" + arr[first_num - (n / 2)])
//     }
//     }

// }
// var first_num = parseInt(prompt("nhap so dau tien: "))
// var n = parseInt(prompt("nhap so n: "))
// Opposite(first_num, n)
//A.2
function cat(str1, str2) {
    //neu khong dung promt
    // var str1 = String(str1)
    // var str2 = String(str2)
    // cat(12345,"abcdefgh")

    //neu khong muon chua khoang trang :
    if (!str1 || !str2) {
        console.log("Chua co du input!")
    } else
    //neu khong muon chua khoang trang :
    //   if(str1.indexOf(' ') >= 0 || str2.indexOf(' ') >= 0){
    //     console.log("co chua khoang trang trong string!");
    // } else  
    {
        let len1 = str1.length
        let len2 = str2.length
        var new_str = new Array
        if (len1 <= len2) {
            let j = 0
            for (let i = 0; i < 2 * len1; i++) {
                if (i % 2 == 0) {
                    new_str.push(str1[j])
                } else {
                    new_str.push(str2[j])
                    j++
                }
            }
            for (let i = len1; i < len2; i++) {
                new_str.push(str2[i])
            }

        } else if (len1 > len2) {
            let j = 0
            for (let i = 0; i < 2 * len2; i++) {
                if (i % 2 == 0) {
                    new_str.push(str1[j])
                } else {
                    new_str.push(str2[j])
                    j++
                }
            }
            for (let i = len2; i < len1; i++) {
                new_str.push(str1[i])
            }
        }
        console.log(new_str.join(""))
    }

}
// var str1 = prompt("điền string 1: ")
// var str2 = prompt("điền string 2: ")
// cat(str1, str2)
// cat("xy", " ")
//B
var run = document.getElementsByClassName("project_content")
function welcome() {
    document.getElementById("welcome_content").style.display = "block"
    for (let i = 0; i < run.length; i++) {
        run[i].style.display = "none";    
     }
    document.getElementById("contact_content").style.display = "none"
}
function project() {
    document.getElementById("welcome_content").style.display = "none"
    for (let i = 0; i < run.length; i++) {
       run[i].style.display = "block";    
    }
    document.getElementById("contact_content").style.display = "none"
}
function contact() {
    document.getElementById("welcome_content").style.display = "none"
    for (let i = 0; i < run.length; i++) {
        run[i].style.display = "none";    
     }
    document.getElementById("contact_content").style.display = "block"
}



