"use client";

import { useEffect, useRef } from 'react';
import { SVG } from '@svgdotjs/svg.js';

const HeroLines = () => {
  const svgRef = useRef(null);
  
  const purpleLine1 = useRef(null);
  const purpleWormLine1 = useRef(null);
  const purpleWorm1 = useRef(null);

  const purpleLine2 = useRef(null);
  const purpleWormLine2 = useRef(null);
  const purpleWorm2 = useRef(null);

  const purpleLine3 = useRef(null);
  const purpleWormLine3 = useRef(null);
  const purpleWorm3 = useRef(null);

  const greenLine1 = useRef(null);
  const greenWormLine1 = useRef(null);
  const greenWorm1 = useRef(null);

  const greenLine2 = useRef(null);
  const greenWormLine2 = useRef(null);
  const greenWorm2 = useRef(null);

  const greenLine3 = useRef(null);
  const greenWormLine3 = useRef(null);
  const greenWorm3 = useRef(null);
  

  const drawPurpleLine1 = (draw, refX, refY) => {
    const existingPath = document.getElementById('purpleLine1');
    if(existingPath)
      return null;

    const screenWidth = window.innerWidth;
    const xFirstCorner = (screenWidth <= 640) ? refX - 150 : refX - 300;
    const xSecondCorner = (screenWidth <= 640) ? refX + 128 : refX + 256;
    const cornerRadius = 24;
    const yInitial = refY;
    const yTop = (screenWidth <= 640) ? refY - 90 : refY - 180;

    purpleLine1.current = drawLine(draw, yInitial, yTop, xFirstCorner, xSecondCorner, cornerRadius, '#AC5CFB', 'top');
    purpleLine1.current.id('purpleLine1');
    
    let animationPaths = animateLine(draw, purpleLine1.current, '#AC5CFB', 'toLeft');
    purpleWormLine1.current = animationPaths[0];
    purpleWorm1.current = animationPaths[1];
  }

  const drawPurpleLine2 = (draw, refX, refY) => {
    const existingPath = document.getElementById('purpleLine2');
    if(existingPath)
      return null;

    const screenWidth = window.innerWidth;
    const xFirstCorner = (screenWidth <= 640) ? refX - 120 : refX - 240;
    const xSecondCorner = (screenWidth <= 640) ? refX + 120 : refX + 240;
    const cornerRadius = 24;
    const yInitial = (screenWidth <= 640) ? refY + 15 : refY + 30;
    const yTop = (screenWidth <= 640) ? refY - 105 : refY - 210;

    console.log('yInitial', yInitial);

    purpleLine2.current = drawLine(draw, yInitial, yTop, xFirstCorner, xSecondCorner, cornerRadius, '#AC5CFB', 'top');
    purpleLine2.current.id('purpleLine2');

    let animationPaths = animateLine(draw, purpleLine2.current, '#AC5CFB', 'toLeft');
    purpleWormLine2.current = animationPaths[0];
    purpleWorm2.current = animationPaths[1];
  }

  const drawPurpleLine3 = (draw, refX, refY) => {
    const existingPath = document.getElementById('purpleLine3');
    if(existingPath)
      return null;

    const screenWidth = window.innerWidth;
    const xFirstCorner = (screenWidth <= 640) ? refX - 105 : refX - 210;
    const xSecondCorner = (screenWidth <= 640) ? refX + 140 : refX + 280;
    const cornerRadius = 24;
    const yInitial = (screenWidth <= 640) ? refY + 30 : refY + 60;
    const yTop = (screenWidth <= 640) ? refY - 115 : refY - 230;

    purpleLine3.current = drawLine(draw, yInitial, yTop, xFirstCorner, xSecondCorner, cornerRadius, '#AC5CFB', 'top');
    purpleLine3.current.id('purpleLine3');
    
    let animationPaths = animateLine(draw, purpleLine3.current, '#AC5CFB', 'toLeft');
    purpleWormLine3.current = animationPaths[0];
    purpleWorm3.current = animationPaths[1];
  }

  const drawGreenLine1 = (draw, refX, refY) => {
    const existingPath = document.getElementById('greenLine1');
    if(existingPath)
      return null;

    const screenWidth = window.innerWidth;
    const xFirstCorner = (screenWidth <= 640) ? refX - 130 : refX - 260;
    const xSecondCorner = (screenWidth <= 640) ? refX + 155 : refX + 310;
    const cornerRadius = 24;
    const yInitial = (screenWidth <= 640) ? refY - 15 : refY - 30;
    const yBottom = (screenWidth <= 640) ? refY + 90 : refY + 180;

    greenLine1.current = drawLine(draw, yInitial, yBottom, xFirstCorner, xSecondCorner, cornerRadius, '#32E685', 'bottom');
    greenLine1.current.id('greenLine1');

    let animationPaths = animateLine(draw, greenLine1.current, '#32E685', 'toRight');
    greenWormLine1.current = animationPaths[0];
    greenWorm2.current = animationPaths[1];
  }

  const drawGreenLine2 = (draw, refX, refY) => {
    const existingPath = document.getElementById('greenLine2');
    if(existingPath)
      return null;

    const screenWidth = window.innerWidth;
    const xFirstCorner = (screenWidth <= 640) ? refX - 120 : refX - 240;
    const xSecondCorner = (screenWidth <= 640) ? refX + 120 : refX + 240;
    const cornerRadius = 24;
    const yInitial = (screenWidth <= 640) ? refY - 30 : refY - 60;
    const yBottom = (screenWidth <= 640) ? refY + 105 : refY + 210;

    greenLine2.current = drawLine(draw, yInitial, yBottom, xFirstCorner, xSecondCorner, cornerRadius, '#32E685', 'bottom');
    greenLine2.current.id('greenLine2');
    
    let animationPaths = animateLine(draw, greenLine2.current, '#32E685', 'toRight');
    greenWormLine2.current = animationPaths[0];
    greenWorm2.current = animationPaths[1];
  }

  const drawGreenLine3 = (draw, refX, refY) => {
    const existingPath = document.getElementById('greenLine3');
    if(existingPath)
      return null;

    const screenWidth = window.innerWidth;
    const xFirstCorner = (screenWidth <= 640) ? refX - 140 : refX - 280;
    const xSecondCorner = (screenWidth <= 640) ? refX + 105 : refX + 210;
    const cornerRadius = 24;
    const yInitial = (screenWidth <= 640) ? refY - 45 : refY - 90;
    const yBottom = (screenWidth <= 640) ? refY + 115 : refY + 230;

    greenLine3.current = drawLine(draw, yInitial, yBottom, xFirstCorner, xSecondCorner, cornerRadius, '#32E685', 'bottom');
    greenLine3.current.id('greenLine3');
    
    let animationPaths = animateLine(draw, greenLine3.current, '#32E685', 'toRight');
    greenWormLine3.current = animationPaths[0];
    greenWorm3.current = animationPaths[1];
  }

  const drawLine = (draw, yInitial, yFinal, xFirstCorner, xSecondCorner, cornerRadius, color, topOrBottom) => {
    const screenWidth = window.innerWidth;
    const gradient = draw.gradient('linear', function(add) {
      add.stop(0, 'transparent');
      add.stop(0.1, color);
      add.stop(0.9, color);
      add.stop(1, 'transparent');
    });

    let path = null;
    
    if(topOrBottom == 'top') 
    {
      path = draw.path(`
        M 0 ${yInitial}                    
        H ${xFirstCorner - cornerRadius}         
        A ${cornerRadius} ${cornerRadius} 0 0 0 ${xFirstCorner} ${yInitial - cornerRadius}
        V ${yFinal + cornerRadius}
        A ${cornerRadius} ${cornerRadius} 0 0 1 ${xFirstCorner + cornerRadius} ${yFinal}
        H ${xSecondCorner - cornerRadius}
        A ${cornerRadius} ${cornerRadius} 0 0 1 ${xSecondCorner} ${yFinal + cornerRadius}     
        V ${yInitial - cornerRadius}
        A ${cornerRadius} ${cornerRadius} 0 0 0 ${xSecondCorner + cornerRadius} ${yInitial}
        H ${screenWidth}               
      `);
    } else
    {
      path = draw.path(`
        M 0 ${yInitial}                    
        H ${xFirstCorner - cornerRadius}         
        A ${cornerRadius} ${cornerRadius} 0 0 1 ${xFirstCorner} ${yInitial + cornerRadius}
        V ${yFinal - cornerRadius}
        A ${cornerRadius} ${cornerRadius} 0 0 0 ${xFirstCorner + cornerRadius} ${yFinal}
        H ${xSecondCorner - cornerRadius}
        A ${cornerRadius} ${cornerRadius} 0 0 0 ${xSecondCorner} ${yFinal - cornerRadius}
        V ${yInitial + cornerRadius}
        A ${cornerRadius} ${cornerRadius} 0 0 1 ${xSecondCorner + cornerRadius} ${yInitial}
        H ${screenWidth}
      `).fill('none').stroke({
        width: 2,
        color: gradient,
        opacity: 0.32
      });
    }
    
    path.fill('none').stroke({
      width: 2,
      color: gradient,
      opacity: 0.32
    });

    return path;
  }

  const animateLine = (draw, path, color, direction) => {
    let screenWidth = window.innerWidth;
    const gradient = draw.gradient('linear', function(add) {
      add.stop(0, 'transparent');
      add.stop(0.1, color);
      add.stop(0.9, color);
      add.stop(1, 'transparent');
    });

    let wormPath = path.clone().fill('none').stroke({
      width: 2,
      color: gradient,
      opacity: 1
    });
    draw.add(wormPath);

    let worm = null;
    if(screenWidth <= 1024) {
      worm = draw.rect(100,100).move(0,path.y()).fill(color);
    } else {
      worm = draw.rect(300,300).move(0,path.y()).fill(color);
    }

    wormPath.maskWith(worm);
    worm.hide();
    
    animateMask(worm, path, wormPath, direction);

    return [wormPath, worm];
  }

  const animateMask = (worm, path, wormPath, orientation) => {
    const pathLength = path.length();

    setTimeout(() => {
      wormPath.show();
      worm.show();
      worm.animate(1500, '<>')
        .during(function(pos) {
          const point = (orientation == 'toLeft') ? path.pointAt(pathLength * (1 - pos)) : path.pointAt(pathLength * pos);
          worm.center(point.x, point.y);
        })
        .after(function() {
          worm.hide();
          wormPath.hide();
          animateMask(worm, path, wormPath, orientation);
        });
    }, Math.random() * 1000 + 1000);
  };

  const cleanLines = () => {
    purpleLine1.current?.remove();
    purpleWormLine1.current?.remove();
    purpleWorm1.current?.remove();

    purpleLine2.current?.remove();
    purpleWormLine2.current?.remove();
    purpleWorm2.current?.remove();

    purpleLine3.current?.remove();
    purpleWormLine3.current?.remove();
    purpleWorm3.current?.remove();

    greenLine1.current?.remove();
    greenWormLine1.current?.remove();
    greenWorm1.current?.remove();

    greenLine2.current?.remove();
    greenWormLine2.current?.remove();
    greenWorm2.current?.remove();

    greenLine3.current?.remove();
    greenWormLine3.current?.remove();
    greenWorm3.current?.remove();
  }

  const drawLines = () => {
    const draw = SVG(svgRef.current);
    const screenWidth = window.innerWidth;
    const objectLayerDimensions = document.getElementById('heroModel').getBoundingClientRect();
    const refX = objectLayerDimensions.width / 2; 
    let refY = objectLayerDimensions.height / 2;
    
    if(screenWidth <= 640)
      refY += 160;

    cleanLines();

    drawPurpleLine1(draw, refX, refY);
    drawPurpleLine2(draw, refX, refY);
    drawPurpleLine3(draw, refX, refY);
    drawGreenLine1(draw, refX, refY);
    drawGreenLine2(draw, refX, refY);
    drawGreenLine3(draw, refX, refY);
  }

  useEffect(() => {
    drawLines();
    window.addEventListener('resize', drawLines);

    return () => {
      window.removeEventListener('resize', drawLines);
    };
  }, []);

  return (
    <svg ref={svgRef} style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}} />
  );
};

export default HeroLines;