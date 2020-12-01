$('#userInput').on('click', '#submit', function (event){
    event.preventDefault();
    let userDisplayInput = $('#displayName').val();
    let userCommentInput =  $('#comment').val()
    if (userDisplayInput === ""){
     alert("Must enter Display Name");
     }
    if (userCommentInput === ""){
     alert("Must enter comment to submit");
     }
     else {
        $('.comments').append(`
        <div class="singleComment">
        <div class="messageBox">
            <img src="images/icon-image.png">
            <div id="inline">
                <div id="flex">
                    <h2>${userDisplayInput}</h2>
                    <p>${userCommentInput}</p>
                </div>
                <div id="paragraphs">
                <p id="stretch">Edit</p>
                <p id="stretch2">Delete</p>
                </div>
                </div>
        </div>
        <div class="edit edit2">
            <form onsubmit="inputSection">
                <label for="lname"></label>
                <input id="commentEdit" type="text" name="lname" placeholder="Comment">
                <input id="submitEdit" type="submit" value="Submit">
            </form>
         </div>
         </div>
        `);
        $('#displayName').val("");
        $('#comment').val("");
    } 
});

$('.comments').on('click', '#stretch', function (){
    let parent = $(this).parents()[2];
    let next = $(parent).next();
    $(next).toggleClass('edit');
});

$('.comments').on('click', '#submitEdit', function(event){
    event.preventDefault();
    let insideParent = $(this).parents()[0];
    let childEdit = $(insideParent).children()[1];
    if ($(childEdit).val() === ""){
        alert ("No edit found");
    }
    else {
        
        let lastParent = $(this).parents()[2];  
        let lastChild = $(lastParent).children()[0];
        let lastChild2 = $(lastChild).children()[1];
        let lastChild3 = $(lastChild2).children()[0];
        let lastChild4 = $(lastChild3).children()[1];
        $(lastChild4).text($(childEdit).val());
    }
})
$('.comments').on('click', '#stretch2', function(){
    let delte = $(this).parents()[3];
    $(delte).remove();
});