import React, { useState,useEffect } from 'react';
import { Octokit } from '@octokit/rest';
//import { request } from "@octokit/request";
//import { createTokenAuth } from "@octokit/auth-token";


const octokit = new Octokit({
    auth: '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', // Change to your personal access token
  });

  const { data } = await octokit.request('GET /repos/:owner/:repo', {
    owner: 'lilyxia99',
    repo: 'leilei-blog',
  });
  
  console.log(data);
  
const GitHubPage = () => {
  const [repo, setRepo] = useState('lilyxia99/leilei-blog'); // Change to your repository
  const [fileName, setFileName] = useState(''); // State to store the user-input file name
  const [fileContent, setFileContent] = useState(''); // Content of the file
  const [commitMessage, setCommitMessage] = useState('Update'); // Change to your commit message


  console.log('Authentication status:', octokit.auth);

  const createFile = async () => {
    try {
      // Ensure the user has provided a file name
      if (!fileName) {
        console.error('Please provide a file name.');
        return;
      }


      const contentBase64 = btoa(unescape(encodeURIComponent(fileContent))); // Encode content to base64

      await octokit.repos.createOrUpdateFile({
        owner: 'lilyxia99', // Change to your GitHub username
        repo: repo,
        path: fileName.endsWith('.md') ? fileName : `${fileName}.md`, // Ensure the file has a .md extension
        message: commitMessage,
        content: contentBase64,
      });
      console.log('File created successfully!');
    } catch (error) {
      console.error('Error creating file:', error);
    }
  };

  const commitAndPush = async () => {
    try {

        
        const { data: ref } = await octokit.git.getRef({
            owner: 'your_username', // Change to your GitHub username
            repo: repo,
            ref: 'heads/main', // Change to your branch (e.g., main, master)
          });
    
          await octokit.git.createCommit({
            owner: 'your_username', // Change to your GitHub username
            repo: repo,
            message: commitMessage,
            tree: ref.object.sha,
            parents: [ref.object.sha],
          });
    
          await octokit.git.updateRef({
            owner: 'your_username', // Change to your GitHub username
            repo: repo,
            ref: 'heads/main', // Change to your branch (e.g., main, master)
            sha: ref.object.sha,
          });
    

      console.log('Commit and push successful!');
    } catch (error) {
      console.error('Error committing and pushing:', error);

      //Log more details about the error
        if (error.response) {
        console.error('Error response from GitHub API:', error.response.data);
        }

    }
  };

  return (
    <div>
      {/* Input field for the file name */}
      <input
        type="text"
        placeholder="Enter file name (without extension)"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <br />
      {/* Input field for the file content */}
      <textarea
        placeholder="Enter file content"
        value={fileContent}
        onChange={(e) => setFileContent(e.target.value)}
      />
      <br />
      <button onClick={createFile}>Create File</button>
      <button onClick={commitAndPush}>Commit and Push</button>
    </div>
  );
};

export default GitHubPage;
