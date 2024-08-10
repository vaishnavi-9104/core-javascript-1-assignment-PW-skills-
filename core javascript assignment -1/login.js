// Q5. You're creatin, a ba'ic lo,in 'y'tem. Make a lo,in function with two thin,': a u'ername and a
// pa''word. Check if the u'ername i' "admin" and the pa''word i' "12375". If they're both correct, 'how "Lo,in
// 'ucce''ful"; if not, 'how "Invalid credential'."
function login(username, password)
{
    if(username==="admin" && password=="12375")
    {
        console.log("Login Succesful");
    }
    else
    {
        console.log("Inavlid Credentials");
    }
}
login("admin",12375);