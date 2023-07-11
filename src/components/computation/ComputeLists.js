import React, { useState } from "react";

function ComputeLists() {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");

  const [result, setResult] = useState({
    onlyInA: [],
    onlyInB: [],
    inBoth: [],
    combined: [],
  });

  function computeDifferences() {
    const arrayA = listA.split(" ").filter((item) =>item!==''?item.trim().toLowerCase():"");
    const arrayB = listB.split(" ").filter((item) =>item!==''?item.trim().toLowerCase():"");

    const onlyInA = arrayA.filter((item) => !arrayB.includes(item));
    const onlyInB = arrayB.filter((item) => !arrayA.includes(item));
    const inBoth = arrayA.filter((item) => arrayB.includes(item));
    const combined = Array.from(new Set([...arrayA, ...arrayB]));

    setResult({
      onlyInA,
      onlyInB,
      inBoth,
      combined,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    computeDifferences();
    setListA("");
    setListB("");
  }

  return (
    <div className="py-5 md:px-5 px-2">
      <div className="mb-10 ">
        <form
          onSubmit={handleSubmit}
          className="md:flex items-end justify-between"
        >
          <div className="md:flex items-center justify-between gap-1 md:w-3/5 max-md:mb-5">
            <div>
              <label className="mr-2">List A :</label>
              <input
                type="text"
                onChange={(e) => setListA(e.target.value)}
                value={listA}
                className="inputebox"
              />
            </div>
            <div>
              <label className="mr-2">List B :</label>
              <input
                type="text"
                onChange={(e) => setListB(e.target.value)}
                value={listB}
                className="inputebox"
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="special-button">
              Compute
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="card">
          <label className="label">Items present only in A </label>
          <ol className="ol">
            {result.onlyInA?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        </div>

        <div className="card">
          <label className="label">Items present only in B</label>
          <ol className="ol">
            {result.onlyInB?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        </div>

        <div className="card">
          <label className="label">Items present in both A and B</label>
          <ol className="ol">
            {result.inBoth?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        </div>

        <div className="card">
          <label className="label">Items combining both A and B (unique)</label>
          <ol className="ol">
            {result.combined?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ComputeLists;
