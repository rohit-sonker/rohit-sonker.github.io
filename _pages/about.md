---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I’m Rohit Sonker, a researcher at Auton Lab at Carnegie Mellon University advised by [Prof. Jeff Schneider]("https://www.cs.cmu.edu/~schneide/").
I am broadly interesed in developing AI algorithms for applications in real world domains. Currently, I work on Offline Reinforcement Learning, Optimal Experiment design with Bayesian Optimization, and multi-modal foundational models combining text and time-series data, with application to the field of Nuclear Fusion.

Prior to this I have ~5 years of experience in industry. I led the Data science and Machine learning team at CS DISCO India Office working on Machine learning and Large Language Model applications to help attorneys in E-discovery, document review and building cases. 
Before that, at PwC, I led several projects on the development of AI based intelligent clinical trial design leveraging predictive models, simulations and LLMs.

I graduated with a combined bachelors and masters from IIT Kanpur, where I worked on offroad driving in varying terrain conditions with [Prof. Ashish Dutta]("https://home.iitk.ac.in/~adutta/")

Research Projects
--

## AI for Nuclear Fusion

### Bayesian Optimization for Experiment Design - 
Worked on developing a multi-scale bayesian optimization algorithm to achieve different goals pertaining to plasma control in nuclear fusion. Our algorithm has been tested at DIII-D tokamak facility in San Diego to mitigate tearing mode instabilities and also at K-STAR tokamak in South Korea for betaN (normalized plasma pressure) maximization. Paper currently under submission.


### Reinforcement Learning - 
Designed pipeline for distributed training and hyperparameter tuning of Reinforcement Learning agents for closed loop control of fusion tokamak actuators. I work on developing controllers for plasma profile tracking (eg. Density, Rotation, Differential Rotation)


### Multi-Modal Foundational Models for Nuclear Fusion -
I am actively working on multi-modal state transition model which combines text logs from DIII-D experiments with trajectory data to enhance model performance and enable language conditioned data generation.

## Adaptive Models for Dynamics Learning in Changing Scenarios
Worked on latent parameter recurrent state space models for learning dynamics (state-transistion probability functions) for various robotics tasks. These models used
Kalman updates to account uncertainty in data, and latent variables to dynamically adapt to different regions of the environment. Some examples include - robot moving over varying terrain and manipulator picking different loads. Models achieved state of the art results in robotics tasks. 
 - Vaisakh Shaj, Dieter Büchler, Rohit Sonker, Philipp Becker, Gerhard Neumann [“Hidden Parameter Recurrent State Space Models For Changing Dynamics Scenarios”]("https://openreview.net/pdf?id=ds8yZOUsea"), International Conference for Learning Representations (ICLR) , 2022

## Terrain Height to Dynamics Learning 
Worked on adding terrain height to learning dynamics models of a robot moving over various terrain conditions. Using this model, we also built a Model Predictive Controller (MPC) for trajectory tracking. 
 - R. Sonker and A. Dutta, ["Adding Terrain Height to Improve Model Learning for Path Tracking on Uneven Terrain by a Four Wheel Robot"]("https://ieeexplore.ieee.org/document/9265417") in IEEE Robotics and Automation Letters, Jan. 2021
 - [Code]("https://github.com/rohit-sonker/Path-Tracking-via-Model-based-Learning")


<!-- ### Past Projects

##### -->
