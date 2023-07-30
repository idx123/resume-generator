import React from 'react';
import styled, { css } from 'styled-components';

interface progressProps {
  start: number;
  end: number;
}

const ProgressBar = (props: progressProps) => {
  const { start = 0, end = 0 } = props;
  const percent = (start / end) * 100;

  return (
    <ProgressContainer>
      <span>
        {start} of {end}
      </span>
      <Graph percent={percent}></Graph>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Graph = styled.div<{ percent: number }>`
  width: 100%;
  height: 1.2rem;
  border-radius: 1rem;
  background-color: var(--color-light-gray);

  &::after {
    content: '';
    width: ${({ percent }) => percent}%;
    height: 1.2rem;
    border-radius: 1rem;
    background-color: var(--color-main);
    position: absolute;
  }
`;

export default ProgressBar;
