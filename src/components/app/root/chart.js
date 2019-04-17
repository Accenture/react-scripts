import { nodes, links } from './graph.json';
import {
  forceCollide,
  forceSimulation,
  forceLink,
  forceManyBody,
  forceX,
  forceY,
} from 'd3-force';
import { event as d3Event, select } from 'd3-selection';
import { drag as d3Drag } from 'd3-drag';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const data = { nodes, links };

const height = 680;
const width = 975;

export const scale = scaleOrdinal(schemeCategory10);

function color(d) {
  return scale(d.group);
}
function drag(simulation) {
  function dragstarted(d) {
    if (!d3Event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3Event.x;
    d.fy = d3Event.y;
  }

  function dragended(d) {
    if (!d3Event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3Drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);
}

function radius(d) {
  return d.radius;
}

export const chart = function(svgElement) {
  const links = data.links.map(d => Object.create(d));
  const nodes = data.nodes.map(d => Object.create(d));

  const simulation = forceSimulation(nodes)
    .force(
      'link',
      forceLink(links)
        .id(d => d.id)
        .distance(d => d.value),
    )
    .force('radius', forceCollide(radius));
  // .force('charge', forceManyBody());
  // .force('x', forceX())
  // .force('y', forceY());

  const svg = select(svgElement).attr('viewBox', [
    -width / 2,
    -height / 2,
    width,
    height,
  ]);

  const link = svg
    .append('g')
    .attr('stroke', '#999')
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke-opacity', d => (d.invisible ? 0 : 0.6))
    .attr('stroke-width', d => 3 || Math.sqrt(d.value));

  const node = svg
    .append('g')
    .attr('stroke', '#fff')
    .attr('stroke-width', 1.5)
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', d => d.radius || 5)
    .attr('fill', color)
    .call(drag(simulation));

  node.append('title').text(d => d.id);

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node.attr('cx', d => d.x).attr('cy', d => d.y);
  });

  // invalidation.then(() => simulation.stop());

  return svg.node();
};
