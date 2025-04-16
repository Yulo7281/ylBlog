import ProjectsContents from '@/contents/projects';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: '宝藏项目',
        description: '一些项目的展示。',
        caption: '更多',
      }}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
