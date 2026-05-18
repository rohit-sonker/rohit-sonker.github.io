---
permalink: /
title: "About me"
description: "Rohit Sonker is a Robotics PhD student at CMU's Auton Lab researching reinforcement learning, Bayesian optimization, and LLMs for scientific decision-making and nuclear fusion plasma control."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I am Rohit Sonker, a Robotics Ph.D. student at the Auton Lab, Carnegie Mellon University, advised by [Prof. Jeff Schneider](https://www.cs.cmu.edu/~schneide/).

My research focuses on how we can create decision-making agents for scientific and physical systems. I am broadly interested in decision making algorithms (Reinforcement Learning and Bayesian optimization) and how Large Language Models (LLMs) can be used to improve decision making (agents/domain informed priors/taking in high dimensional feedback). My recent work has focused on offline RL and adaptive RL for tokamak plasma control, Bayesian optimization for nuclear fusion experiments, and LLM-assisted experimental design.

Prior to my Ph.D., I spent about five years in industry. I led the Data Science and Machine Learning team at CS DISCO India, where I worked on machine learning and large language model applications for e-discovery, document review, and legal case development. Before that, at PwC, I led projects on AI-based clinical trial design using predictive models, simulations, and large language models.

I received a combined bachelor's and master's degree from IIT Kanpur, where I worked on off-road robot navigation over varying terrain conditions with [Prof. Ashish Dutta](https://home.iitk.ac.in/~adutta/).


Research Projects
--

### Reinforcement Learning for Tokamak Plasma Control

Developed offline reinforcement learning policies for plasma profile control in tokamak nuclear fusion reactors using historical experimental data. These policies were experimentally tested on the DIII-D tokamak.

- Rohit Sonker, Hiro Farre, Jiayu Chen, Andrew Rothstein, Ian Char, Ricardo Shousha, Egemen Kolemen, Jeff Schneider, ["Offline Reinforcement Learning for Rotation Profile Control in Tokamaks"](https://arxiv.org/abs/2605.05857), Learning for Dynamics & Control Conference (L4DC), 2026.

### LLM-Based Bayesian Optimization with Auxiliary Feedback

This project studies how scientific logs and text feedback can improve probabilistic decision-making for experimental optimization.

- Tejus Gupta, Rohit Sonker, EM Karagözlü, Barnabás Póczos, Jeff Schneider, ["Large Language Model-based Bayesian Optimization for Tokamak Stabilization"](https://ml4physicalsciences.github.io/2025/files/NeurIPS_ML4PS_2025_268.pdf), Workshop on Machine Learning and Physical Sciences, NeurIPS 2025.

### Bayesian Optimization for Experiment Design

Developed multi-timescale Bayesian optimization methods for plasma control in nuclear fusion. The approach was tested at the DIII-D tokamak facility in San Diego for tearing-mode mitigation and at the KSTAR tokamak in South Korea for normalized plasma pressure maximization.

- Rohit Sonker<sup>*</sup>, Alexandre Capone<sup>*</sup>, Andrew Rothstein, Hiro Farre, Egemen Kolemen, Jeff Schneider, ["Multi-Timescale Dynamics Model Bayesian Optimization for Plasma Stabilization in Tokamaks"](https://openreview.net/attachment?id=d7v7RVXbNH&name=pdf), International Conference on Machine Learning (ICML), 2025.

### Multimodal Foundation Models for Nuclear Fusion

Developing multimodal state-transition models that combine text, trajectory, and time-series data. The goal is to enable text-conditioned time-series generation and time-series-conditioned text generation for scientific systems.

### Adaptive Models for Dynamics Learning in Changing Scenarios

Developed latent-parameter recurrent state-space models for learning dynamics in changing environments. These models use Kalman updates to account for uncertainty and latent variables to adapt across different regions of the environment. Applications include mobile robots moving over varying terrain and manipulators handling different loads.

- Vaisakh Shaj, Dieter Büchler, Rohit Sonker, Philipp Becker, Gerhard Neumann, ["Hidden Parameter Recurrent State Space Models For Changing Dynamics Scenarios"](https://openreview.net/pdf?id=ds8yZOUsea), International Conference on Learning Representations (ICLR), 2022.

### Terrain-Aware Dynamics Learning for Robot Navigation

Incorporated terrain height information into learned dynamics models for robot navigation over uneven terrain. The learned model was used within a model predictive controller for trajectory tracking.

- R. Sonker and A. Dutta, ["Adding Terrain Height to Improve Model Learning for Path Tracking on Uneven Terrain by a Four Wheel Robot"](https://ieeexplore.ieee.org/document/9265417), IEEE Robotics and Automation Letters, 2021.
- [Code](https://github.com/rohit-sonker/Path-Tracking-via-Model-based-Learning)

<!-- ### Past Projects

##### -->
