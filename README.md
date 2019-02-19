# Coding week day 2

## Table of contents

- Slack clone directory
  - Solution files
  - Code files

## CSS

CSS is a style sheet language that lets you apply styles apply selectively to elements in HTML documents.

We have seen how to create a separate file for our css and how to reference it inside our head-tag.

```
<head>
  <title>Page Title</title>
  <link rel="stylesheet" href="css/style.css">
</head>
```

Every browser (Safari, Chrome, etc.) has its own default ‘user agent’ stylesheet that it uses to make unstyled websites appear more legible.

It is good practice to ‘reset’ the browser’s default styles. You may run into weird conflicts and hard to find problems later on by using your own styles.

[Reset Css](https://meyerweb.com/eric/tools/css/reset/reset.css)

We have also seen how to put a background color to the viewport (body)

```
body {
 background: red;
}
```

![css example](https://mdn.mozillademos.org/files/9461/css-declaration-small.png)

To modify multiple property values at once, you just need to write them separated by semicolons:

```
body{
  background: red;
  color: white;
}
```
If we want to apply the same style on multiple elements just separate the selectors with a coma:

```
p, li, h1 {
  color: red;
}
```

There are different types of selectors:

Element selector
```
section{
  background: blue;
}
```
ID selector
```
#portfolio{
  background: grey;
}
```
Class selector
```
.container{
  width: 90%;
}
```
Pseudo-class selector
```
a:hover{
  opacity: 0.9;
}
```

## Access child elements with css

If we want to access a child element in our css we do this with a space between element selectors:

```
section p{
  width: 80%;
}
```

You can combine the class (or id) selector with other selectors, like element:

```
section#portfolio{
  border: 1px solid black;
}
```

Universal selector

```
*{
  margin: 0;
}
```

Select all elements inside of another element:

```
section *{
  color: black;
}
```

Let's do this game to practice css selectors
[CSS Diner - Where we feast on CSS Selectors!](https://flukeout.github.io/){:target="_blank"}

As in html, we can add comments to our css:

```
/* This is a comment in css */
```


## Colors and typography

Google fonts!

HTML has three ways to create colors:

- Color name
- Hexadecimal (hex code)
- RGB - rgba (alpha)

## Css box model
Every HTML element is a rectangular box.

The width of the element = content+border+padding

Border adds a border to the element. The border width is added to the total width and height of the element. We can set the border width, style, and color through its values.

Padding references the space between the border of the element and its content. The padding is added to the total width and height of the element too.

Box-Sizing helps you avoid the spacing created by the padding or border properties.

Margin references the space between the border and the rest of the elements on our website. It doesn’t affect the element’s width and height. It helps you to position elements in a particular place.

## Media queries