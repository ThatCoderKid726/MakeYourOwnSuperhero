var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

hero_image_width = 30;
hero_image_height = 30;

var player_object= "";
var hero_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    hero_image_object = Img;

    hero_image_object.scaleToWidth(hero_image_width);
    hero_image_object.scaleToHeight(hero_image_height);
    hero_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(hero_image_object);

    });

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;   
}
if(e.shiftKey && keyPressed == '77')
{
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '87')
    {
        new_image('hulk_face.png'); 
        console.log("w");
    }
    if(keyPressed == '71')
    {
        new_image('hulk_right_hand.png'); 
        console.log("g");
    }
    if(keyPressed == '76')
    {
        new_image('hulk_left_hand.png'); 
        console.log("l");
    }
    if(keyPressed == '84')
    {
        new_image('hulkd_body.png'); 
        console.log("t");
    }
    if(keyPressed == '82')
    {
        new_image('hulk_legs.png'); 
        console.log("r");
    }
    if(keyPressed == '89')
    {
        new_image('ironman_body.png'); 
        console.log("y");
    }
    if(keyPressed == '68')
    {
        new_image('ironman_face.png'); 
        console.log("d");
    }
    if(keyPressed == '85')
    {
        new_image('ironman_left_hand.png'); 
        console.log("u");
    }
    if(keyPressed == '67')
    {
        new_image('ironman_right_hand.png'); 
        console.log("c");
    }
    if(keyPressed == '65')
    {
        new_image('ironman_legs.png'); 
        console.log("a");
    }
    if(keyPressed == '66')
    {
        new_image('thor_face.png'); 
        console.log("b");
    }
    if(keyPressed == '75')
    {
        new_image('thor_left_hand.png'); 
        console.log("k");
    }
    if(keyPressed == '90')
    {
        new_image('thor_right_hand.png'); 
        console.log("z");
    }
    if(keyPressed == '49')
    {
        new_image('spiderman_face.png'); 
        console.log("1");
    }
    if(keyPressed == '50')
    {
        new_image('spiderman_left_hand.png'); 
        console.log("2");
    }
    if(keyPressed == '51')
    {
        new_image('spiderman_right_hand.png'); 
        console.log("3");
    }
    if(keyPressed == '52')
    {
        new_image('spiderman_body.png'); 
        console.log("4");
    }
    if(keyPressed == '53')
    {
        new_image('spiderman_legs.png'); 
        console.log("5");
    }
}
function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
