//A.1
function Opposite(first_num, n) {
    var arr = new Array
    for (let i = 0; i < n; i++)
        arr.push((first_num + i))

    alert("số đối diện với số đầu tiên (" + first_num + ") là :" + arr[Math.floor(n / 2)])
}
// var first_num = parseInt(prompt("nhap so dau tien: "))
// var n = parseInt(prompt("nhap so n: "))
// Opposite(first_num,n)
//A.2
function cat(str1, str2) {
    let len1 = str1.length
    let len2 = str2.length
    let totalLen = len1 + len2
    // console.log(str1+str2)
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

    var str = new String
    for (let i = 0; i < new_str.length; i++) {
        str[i] = new_str[i]
    }
    console.log(str)

}
// var str1 = prompt("điền string 1: ")
// var str2 = prompt("điền string 2: ")
// cat(str1,str2)
//B

function welcome(){
    document.getElementById("welcome_content").style.display = "block"
    document.getElementById("project_content").style.display = "none"
    document.getElementById("contact_content").style.display = "none"
}
function project(){
    document.getElementById("welcome_content").style.display = "none"
    document.getElementById("project_content").style.display = "block"
    document.getElementById("contact_content").style.display = "none"
}
function contact(){
    document.getElementById("welcome_content").style.display = "none"
    document.getElementById("project_content").style.display = "none"
    document.getElementById("contact_content").style.display = "block"
}



