export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622adf2bb869db68a2c754cf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uzirmw3i',
                  apiId: '7db75f26-f716-4612-a954-1023a4e38adb'
                },
                {
                  buildHookId: '622adf2b33dab26bce63c2fe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zyjtm9yy',
                  apiId: '777d6cdb-77b2-4270-96be-b57993271775'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Gyan-Ratan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zyjtm9yy.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
