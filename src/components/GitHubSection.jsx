import React from "react";

const GitHubSection = () => {
  return (
    <section id="github" className="py-20 px-4 bg-[#111827] text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-10">GitHub</h2>
      <div className="bg-[#1f2937] rounded-xl shadow-md border border-gray-700 p-6 max-w-3xl w-full flex flex-col items-center justify-center mx-auto">
        {/* Replace the src below with the user's contribution graph image */}
        <img
          src="/images/github.jpeg"
          alt="GitHub Contribution Graph"
          className="w-full max-w-2xl rounded-lg border border-gray-800 bg-[#222]"
        />
      </div>
    </section>
  );
};

export default GitHubSection; 