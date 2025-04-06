/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/AuditServices.png';
import Veritru from '../../assets/recentprojects/IsostaticGraphite.png';
import Lofo from '../../assets/recentprojects/ProjectControlProcess.png';
import test from '../../assets/recentprojects/veritru.png';

import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Audit Services', 
      description: `This project explores how organizations select audit services amid evolving regulations. 
      It examines the tender process, key decision factors (expertise, compliance, cost), and compares competitive bidding with direct selection. 
      Additionally, it highlights how local firms leverage global networks to compete. The research maps the dynamics shaping audit engagements today.`,
      alter: 'Audit Services',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Isostatic Graphite', 
      description: `This project analyzes the global isostatic graphite market, projected to grow at a 7.28% CAGR (2021–2026), highlighting demand-supply gaps and major production hubs.
      It assesses pricing trends influenced by China’s export restrictions and the rise of silicon-carbon composites.
      A supplier benchmarking and cost driver analysis offers strategic insights for stakeholders navigating material shifts and sourcing challenges.`,
      alter: 'Isostatic Graphite',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Project Control Process', 
      description: `This project analyzes the Project Control Process with a focus on cost and schedule tracking to maintain alignment with baselines.
      It benchmarks UK/Ireland industry practices, comparing frameworks like Scrum and Waterfall and tools such as AI analytics and Gantt charts.
      Case studies from the water industry highlight evolving best practices, regulatory standards, and innovations in risk mitigation and efficiency.`,
      alter: 'Project Control Process',
      image: `${Lofo}`,
    },
    // { 
    //   id: 4,
    //   title: 'Startup Project', 
    //   description: `A website portfolio project for the Startup Dev Team
    //   built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
    //   alter: 'Startup Project',
    //   image: `${Startup}`,
    // },
    // { 
    //   id: 5,
    //   title: 'LaCalle Cafe', 
    //   description: `A website project for the La Calle Cafe business
    //   built using Wordpress and PHP with integrated SEO tools to help
    //   the business ramp up its prospects and lead generation.`,
    //   alter: 'Startup Project',
    //   image: `${Lacalle}`,
    // },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
