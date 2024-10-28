from turtle import * 


#we want to paint a house
shape("circle")
#step 1: draw a square

width(6)
color("pink")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(150)
left(90)

#end of square

#drawing a door

color("pink")
begin_fill()
forward(85)
left(90)

forward(90)
left(90)

forward(85)
end_fill()

penup()
goto(200, 200)
pendown()

#roof

begin_fill()
color("pink")
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(175, 120)
pendown()

right(60)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

penup()
goto(70, 120)
pendown()

right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

exitonclick()