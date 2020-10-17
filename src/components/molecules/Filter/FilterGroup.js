import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import { CATEGORY, FIELD, REGION, PROJECT_TYPE } from "./ItemData";

function FilterGroup(props) {
  const category = "카테고리";
  const region = "지역";
  const field = "구인분야";
  const projectType = "프로젝트 종류";

  return (
    <FilterWrapper>
      <Filter
        width={props.width}
        height={props.height}
        line={props.line}
        level={props.level}
        defaultText={category}
        data={CATEGORY}
        onClick={props.setCategory}
      ></Filter>
      <Filter
        width={props.width}
        height={props.height}
        line={props.line}
        level={props.level}
        defaultText={field}
        data={FIELD}
        onClick={props.setField}
      ></Filter>
      {props.type === "project" && (
        <>
          <Filter
            width={props.width}
            height={props.height}
            line={props.line}
            level={props.level}
            defaultText={region}
            data={REGION}
            onClick={props.setRegion}
          ></Filter>
          <Filter
            width={props.width}
            height={props.height}
            line={props.line}
            level={props.level}
            defaultText={projectType}
            data={PROJECT_TYPE}
            onClick={props.setProjectType}
          ></Filter>
        </>
      )}
    </FilterWrapper>
  );
}

export default React.memo(FilterGroup);

const FilterWrapper = styled.div`
  width: fit-content;
  height: 1.6rem;
  justify-content: left;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
