# Analemma

The basic idea of this project is to generate a color scheme based on the **location** and **time of day** of the user, so that as time passes a new color is generated.

**The How of it is made into sections:**

## Color choice:

The Colors are picked based on the cycle of day & night, and I made it as close to real life colors as possible.
The Colors I choose with their RGB Values are present in the chart below:

![Color Chart](https://user-images.githubusercontent.com/52047357/161374735-023bdf23-6968-41fd-a547-3c87df163483.png)

Each of these colors represents a part of the day.

## Color Transition:

The transition between these colors and defining what colors goes with what time zone is made possible through an integration with the [api.aladhan](https://api.aladhan.com/) that fetches the prayer times of the day based on the user's latitude and longitude.

And if you are wondering what a prayer has to do with setting colors transitions, basically in the islamic religion, Prayer times are determined by the position of the sun in the sky, so using that we can define what colors goes to what time and so on.

The API returnes a lot of data but what we are using in this project are the timing of the prayers, each paryer translates to a part of the day.

Here's a description for each prayer time and what it translates to:

- Fajr: When morning light in the sky starts spreadings horizontally.
- Sunrise: When the top of the sun's disk just appears above the horizon.
- Dhuhr: When the sun begins to decline after reaching its highest point
- Asr: When the length of any object's shadow reaches a factor of the length of the object plus the length of that object's shadow at Noon
- Maghrib: When the top of the sun's disk just disappears below the horizon.
- Isha: Disappearance of Shafaq At high latitudes a combination of red and white shafaq criteria is used.
- Midnight: Midnight Time.

Now that we have an idea of what prayers are now we map the colors to each one, the mapping is done as the table below.

![image](https://user-images.githubusercontent.com/52047357/161376090-4f415ef5-cb88-4113-b406-6517a3536960.png)

Each Time of day transitions is mapped with multiple color transitions.

## Color Mapping:

This is done using a multi-step process which includes the following:

- Each _Time Of day Transition_ is Mapped into **Zones**, each zone has it's **start-end time** and an **Array of colors transitions**. -_For each element in the array,we store the start and end values, where the start values are the initial color RGB and the end RGB are the next color in the zone and so on util all colors for this zone are defined._.
- Also we store inside the element the start & end time for each color transition to define how much time each transition takes.
- I made an assumption regarding the time for each color transition, where I equally devided the time between transitions. (E.g.,if a zone has 2 transitions A->B->C then A->B would take 50% of total zone time and B->C would take the remaining 50%.)
- This will generate a **`Zones`** object that contains multiple zones with their colors.

## Color Generation:

This is where the magic Happens!

The main concept is fetching the current time from the user's localtime every 10 min _(Modifiable)_, then using this time we fetched to extract the color from the **`Zones`** Object.

I did this using a concept called [Linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation).

The Idea behind it is that if have two known points `(x1,y2)` & `(x1,y2)` and the line between them is linear, then we can calculate any value between those two points.

In the **`Zones`** Object we have each _color's start - end time_ **And** _color start - end RGB transition_.

So using those and the time extracted from the localtime, we can use an equation to find the exact color values (RGB) and generate the desired color.

These colors are applied to the backgroung attribute of the website.
As for the Text elements we defined two static colors:

1. `#F5F5F5` for Night Time (Maghrib to Sunrise).
2. `#1A202C` for Day Time (Sunrise to Maghrib).
