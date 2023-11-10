# osrevenge
A website for open source reverse engineering of mechanical components.

The idea behind this is to create a framework similar to the software development cycle for mechanical parts using the principles of Atomic Mechanical Design. In completion, I want this website to be a one stop shop for mechanical engineers and designers that want to find technical data on OEM and custom parts. There will be a bounty system where people can request reverse engineering of components and all software used to generate drawings and CAD models will be free and open source. It is high time we democratize Mechanical Engineering.



## Atomic Mechanical Design
I originally had this idea when reading about [atomic design as it pertains to web development](https://bradfrost.com/blog/post/atomic-web-design/). I think there are significant parallels that can be drawn from software development to [[Mechanical Design]].  Both systems would seek to use [[heuristics]] and [[frameworks]] to guide design decisions.

The way I envisioned it, [[Atomic Mechanical Design]] is a methodology for creating mechanical systems. There are five distinct levels in the hierarchy: 

1.  [Atoms](https://bradfrost.com/blog/post/atomic-web-design/#atoms) - Part attributes, feature geometry, materials, manufacturing methods, surface finishes, and many more. 
2.  [Molecules](https://bradfrost.com/blog/post/atomic-web-design/#molecules) - The parts themselves, these can include things such as fasteners, O-rings, machined parts, etc. 
3.  [Organisms](https://bradfrost.com/blog/post/atomic-web-design/#organisms) - Assemblies: groups of parts, or molecules, which come together to achieve a certain design intent. 
4.  [Configurable BOM](https://bradfrost.com/blog/post/atomic-web-design/#templates) - Arrangements of interchangeable assembles within a [[Product Option Architecture]] which can be mixed and matched to obtain a final product [[BOM]]. Brad Frost calls these "Templates"
5.  [Product](https://bradfrost.com/blog/post/atomic-web-design/#pages) - A final product after selecting from product options within the [[Product Option Architecture]]. Specific instances of what Brad Frost refers to as "Templates".

These five levels make up what are called [[units of design]]. That is, the things which make up any mechanical design at all levels.

This system cannot always be applied to everything in a given assembly, there may be [[OEM]] parts which do not adhere to the [[Atomic Mechanical Design]] framework. 

### Standardization

Standardization should apply at every level of the hierarchy with distinct criteria for when the rules can be broken. Since there are no syntax rules enforcing mechanical designers to use specific units of design, great care must be taken in enforcing and living by these rules. This is part of the reason for writing out this system because I have been burned many times by the snags that come with non standard parts. 

In the future I would like to explore the idea of developing a [[Mechanical Design Language]] with built in syntax checking so that mechanical designers may develop mechanical parts in much the same way that software developers develop software. 


