import React, { useState,useEffect } from 'react';
import { Octokit } from '@octokit/rest';
//import { request } from "@octokit/request";
//import { createTokenAuth } from "@octokit/auth-token";


const octokit = new Octokit({
    auth: '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', // Change to your personal access token
  });
const Owner='lilyxia99'
const Repo = 'leilei-blog'
  
const GitHubPage = () => {
  const [repo, setRepo] = useState('lilyxia99/leilei-blog'); // Change to your repository
  const [fileName, setFileName] = useState(''); // State to store the user-input file name
  const [fileContent, setFileContent] = useState(''); // Content of the file
  const [commitMessage, setCommitMessage] = useState('Update'); // Change to your commit message
  const [path, setPath] = useState(''); // New state to store the user-input path


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await octokit.request('GET /user');
        console.log('User data:', data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount


  const createFile = async () => {
    if (!fileName) {
      console.error('Please provide a file name.');
      return;
    }

    // Check if fileName already ends with ".md", if not, append it
    const finalFileName = fileName.endsWith('.md') ? fileName : `${fileName}.md`;
    //const slashPath = path && path.endsWith('/') ? `${path}${finalFileName}` : `${path}/${finalFileName}`;
    //const finalPath = `content/garden/${slashPath}`;

    // Concatenate the path with the finalFileName
    //
    //console.log("finalPath",finalPath);

    const contentBase64 = btoa(unescape(encodeURIComponent(fileContent))); // Encode content to base64
    try {
      // Ensure the user has provided a file name
      // Check if the file exists in the repository
      const existingFile = await octokit.request('GET /repos/{owner}/{repo}/contents/content/garden/{path}',{
        owner:Owner,
        repo:Repo,
        path:finalFileName,
      });
      console.log("existingFile",existingFile);

      // If the file exists, get its SHA
      const sha = existingFile.data.sha;

      await octokit.request('PUT /repos/{owner}/{repo}/contents/content/garden/{path}', {
        owner: Owner,
        repo: Repo,
        path: finalFileName,
        message: 'update',
        committer: {
          name: 'Leilei Xia',
          email: 'lilyxia99@gmail.com'
        },
        content: contentBase64,
        sha:sha,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      console.log('File updated successfully!');
    } catch (error) {
      if (error.status === 404){
        try{
          await octokit.request('PUT /repos/{owner}/{repo}/contents/content/garden/{path}', {
            owner: Owner,
            repo: Repo,
            path: finalFileName,
            message: 'update',
            committer: {
              name: 'Leilei Xia',
              email: 'lilyxia99@gmail.com'
            },
            content: contentBase64,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })
          console.log('File created successfully!');
          }catch (createError) {
            console.error('Error creating file:', createError);
        }
      }else {
        console.error('Error creating or updating file:', error);
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
      <input
        type="text"
        placeholder="Enter path (optional)"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Enter file content"
        value={fileContent}
        onChange={(e) => setFileContent(e.target.value)}
      />
      <br />
      <button onClick={createFile}>Create File</button>
    </div>
  );
};

export default GitHubPage;
