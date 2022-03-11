# Absolute Fill

```css
.absolute-fill {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
```

# Composition Component props

- width and height in pixels.
- durationInFrames: Length of the sequence component in terms of frames.
- fps: The amount of frames per second.
- duration in video : The duration in frames divided by FPS results in the - duration in seconds.

```js
const durationInFrames = {350}
const fps={30}

const duration = durationInFrames/fps = 11.6666666667

```

```js
visualization = [
    0.15670682393871885,
    0.10478722401352458,
    0.0678726312622418,
    0.04621382756159487,
    0.0345609730604442,
    0.027044371290930177,
    0.02066611068658602,
    0.01575074007079076,
    0.012754635577468454,
    0.01078152644629571,
    0.008959464477459914,
    0.007201667159923503,
    0.005800586953201095,
    0.004927504981703315,
    0.004436337796178716,
    0.00407496327742024
]


```




# Frame
> Still image at certain point in video
The frame is a single image in a sequence of pictures. 
In general, one second of a video is comprised of 24 or 30 frames per second also known as FPS. The frame is a combination of the image and the time of the image when exposed to the view. An extract of frames in a row makes the animation.
a frame is one of the many still images which compose the complete moving picture

Frames per second:
60fps : 60 images are shown in one second. THat shows a video.
In one second, 60 images are captured and we are able to see video with proper motion and all those things.
Higher fps , more images are shot which makes video more smoother. may be useful for wildlife videography.

- Higher  fps , motion / transisition of the video will be smooth as more photos are clicked per seconds.
- Video can be made slow motion eg : 60fps = 1sec -> 30fps = 2secs


FFmpeg : A complete, cross-platform solution to record, convert and stream audio and video.


Composition :  major reason behind remotion instead of using illustrator. Cant achive through illustrator, we can't change that particulr component in 20 places.


Remotion : tells you what is the current frame via hook, and user responsibility is to tell what to render in that particular frame.
If we have lot of still framme it animates to the video

Render process , we use pupetter to make whole lot of screenshots and optimization to make it decently fast.
Stitches the screenshot together with ffmpeg tool.


Major concepts : Make lot of still images by screenshting, and add them together and build the video.


# Animating properties 
Animation is all about how properties change over time. Let's start with a simple example, let's say we want to create a fade in animation.

Remotion is also equipped with a player known as Remotion Player, which gives you the feeling of a real video editor, and it can be used to play and review your video using your browser.



DATA DRIVEN VIDEOS


INTERPOLATE MEANING :
statistical method by which related known values are used to estimate an unknown price or potential yield of a security
Interpolation is a method of constructing new data points within range of discrete set of known data points
