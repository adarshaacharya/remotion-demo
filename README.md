# Remotion video

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <img src="https://github.com/remotion-dev/logo/raw/main/withtitle/element-0.png">
  </a>
</p>

Welcome to your Remotion project!

## Commands

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Server render demo**

```console
npm run server
```

See [docs for server-side rendering](https://www.remotion.dev/docs/ssr) here.

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help [on our Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).



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