const { AwsCdkTypeScriptApp } = require('projen');

const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.96.0',
  cdkVersionPinning: true,
  cdkDependencies: ['@aws-cdk/aws-codepipeline', '@aws-cdk/aws-codepipeline-actions', '@aws-cdk/aws-ecr', '@aws-cdk/aws-events-targets', '@aws-cdk/aws-codebuild', '@aws-cdk/aws-iam', '@aws-cdk/aws-lambda', '@aws-cdk/aws-s3', '@aws-cdk/aws-ssm', '@aws-cdk/core', '@aws-cdk/pipelines', '@aws-cdk/aws-ecr', '@aws-cdk/aws-codedeploy'],
  devDeps: ['@types/aws-lambda@^8.10.72', 'eslint-config-prettier', 'eslint-plugin-prettier', '@types/js-yaml@^3.12.5'],
  deps: ['js-yaml@^3.14.1'],
  eslint: true,
  dependabot: false,
  releaseWorkflow: false,
  defaultReleaseBranch: 'main',
  jsiiFqn: 'projen.AwsCdkTypeScriptApp',
  name: '',
  authorEmail: '',
  authorName: 'Chris Yang',
  description: '',
  repository: 'https://github.com/[owner]/[repo]',
  keywords: ['CodePipeline', 'CodeBuild'],
  gitignore: ['lambda/codepipeline-event/dist', 'lambda/codebuild-event/dist'],
  buildWorkflow: false,

  /* AwsCdkTypeScriptAppOptions */
  // appEntrypoint: 'main.ts',                                                 /* The CDK app's entrypoint (relative to the source directory, which is "src" by default). */
  // cdkDependencies: undefined,                                               /* Which AWS CDK modules (those that start with "@aws-cdk/") this app uses. */
  // cdkVersionPinning: false,                                                 /* Use pinned version instead of caret version for CDK. */
  // context: undefined,                                                       /* Additional context to include in `cdk.json`. */
  // requireApproval: CdkApprovalLevel.BROADENING,                             /* To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. */

  /* NodePackageOptions */
  // allowLibraryDependencies: true,                                           /* Allow the project to include `peerDependencies` and `bundledDependencies`. */
  // authorEmail: undefined,                                                   /* Author's e-mail. */
  // authorName: undefined,                                                    /* Author's name. */
  // authorOrganization: undefined,                                            /* Author's Organization. */
  // authorUrl: undefined,                                                     /* Author's URL / Website. */
  // autoDetectBin: true,                                                      /* Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. */
  // bin: undefined,                                                           /* Binary programs vended with your module. */
  // bundledDeps: undefined,                                                   /* List of dependencies to bundle into this module. */
  // deps: [],                                                                 /* Runtime dependencies of this module. */
  // description: undefined,                                                   /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                                                              /* Build dependencies for this module. */
  // entrypoint: 'lib/index.js',                                               /* Module entrypoint (`main` in `package.json`). */
  // homepage: undefined,                                                      /* Package's Homepage / Website. */
  // keywords: undefined,                                                      /* Keywords to include in `package.json`. */
  // license: 'Apache-2.0',                                                    /* License's SPDX identifier. */
  // licensed: true,                                                           /* Indicates if a license should be added. */
  // maxNodeVersion: undefined,                                                /* Minimum node.js version to require via `engines` (inclusive). */
  // minNodeVersion: undefined,                                                /* Minimum Node.js version to require via package.json `engines` (inclusive). */
  // npmAccess: undefined,                                                     /* Access level of the npm package. */
  // npmDistTag: 'latest',                                                     /* Tags can be used to provide an alias instead of version numbers. */
  // npmRegistryUrl: 'https://registry.npmjs.org',                             /* The base URL of the npm package registry. */
  // npmTaskExecution: NpmTaskExecution.PROJEN,                                /* Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz). */
  // packageManager: NodePackageManager.YARN,                                  /* The Node Package Manager used to execute scripts. */
  // packageName: undefined,                                                   /* The "name" in package.json. */
  // peerDependencyOptions: undefined,                                         /* Options for `peerDeps`. */
  // peerDeps: [],                                                             /* Peer dependencies for this module. */
  // projenCommand: 'npx projen',                                              /* The shell command to use in order to run the projen CLI. */
  // repository: undefined,                                                    /* The repository is the location where the actual code for your package lives. */
  // repositoryDirectory: undefined,                                           /* If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. */
  // scripts: {},                                                              /* npm scripts to include. */
  // stability: undefined,                                                     /* Package's Stability. */

  /* NodeProjectOptions */
  // antitamper: true,                                                         /* Checks that after build there are no modified files on git. */
  // artifactsDirectory: 'dist',                                               /* A directory which will contain artifacts to be published to npm. */
  // buildWorkflow: undefined,                                                 /* Define a GitHub workflow for building PRs. */
  // codeCov: false,                                                           /* Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. */
  // codeCovTokenSecret: undefined,                                            /* Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. */
  // copyrightOwner: undefined,                                                /* License copyright owner. */
  // copyrightPeriod: undefined,                                               /* The copyright years to put in the LICENSE file. */
  // dependabot: true,                                                         /* Include dependabot configuration. */
  // dependabotOptions: undefined,                                             /* Options for dependabot. */
  // gitignore: undefined,                                                     /* Additional entries to .gitignore. */
  // jest: true,                                                               /* Setup jest unit tests. */
  // jestOptions: undefined,                                                   /* Jest options. */
  // jsiiReleaseVersion: 'latest',                                             /* Version requirement of `jsii-release` which is used to publish modules to npm. */
  // mergify: true,                                                            /* Adds mergify configuration. */
  // mergifyAutoMergeLabel: 'auto-merge',                                      /* Automatically merge PRs that build successfully and have this label. */
  // mergifyOptions: undefined,                                                /* Options for mergify. */
  // mutableBuild: true,                                                       /* Automatically update files modified during builds to pull-request branches. */
  // npmignore: undefined,                                                     /* Additional entries to .npmignore. */
  // npmignoreEnabled: true,                                                   /* Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. */
  // projenDevDependency: true,                                                /* Indicates of "projen" should be installed as a devDependency. */
  // projenUpgradeAutoMerge: undefined,                                        /* Automatically merge projen upgrade PRs when build passes. */
  // projenUpgradeSchedule: [ '0 6 * * *' ],                                   /* Customize the projenUpgrade schedule in cron expression. */
  // projenUpgradeSecret: undefined,                                           /* Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). */
  // projenVersion: undefined,                                                 /* Version of projen to install. */
  // pullRequestTemplate: true,                                                /* Include a GitHub pull request template. */
  // pullRequestTemplateContents: undefined,                                   /* The contents of the pull request template. */
  // releaseBranches: [ 'main' ],                                              /* Branches which trigger a release. */
  // releaseEveryCommit: true,                                                 /* Automatically release new versions every commit to one of branches in `releaseBranches`. */
  // releaseSchedule: undefined,                                               /* CRON schedule to trigger new releases. */
  // releaseToNpm: false,                                                      /* Automatically release to npm when new versions are introduced. */
  // releaseWorkflow: undefined,                                               /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
  // workflowBootstrapSteps: 'yarn install --frozen-lockfile && yarn projen',  /* Workflow steps to use in order to bootstrap this repo. */
  // workflowContainerImage: undefined,                                        /* Container image to use for GitHub workflows. */
  // workflowNodeVersion: undefined,                                           /* The node version to use in GitHub workflows. */

  /* ProjectOptions */
  // clobber: true,                                                            /* Add a `clobber` task which resets the repo to origin. */
  // devContainer: false,                                                      /* Add a VSCode development environment (used for GitHub Codespaces). */
  // gitpod: false,                                                            /* Add a Gitpod development environment. */
  // logging: {},                                                              /* Configure logging options such as verbosity. */
  // outdir: '.',                                                              /* The root directory of the project. */
  // parent: undefined,                                                        /* The parent project, if this project is part of a bigger project. */
  // projectType: ProjectType.UNKNOWN,                                         /* Which type of project this is (library/app). */
  // readme: undefined,                                                        /* The README setup. */

  /* TypeScriptProjectOptions */
  // compileBeforeTest: undefined,                                             /* Compile the code before running tests. */
  // disableTsconfig: false,                                                   /* Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). */
  // docgen: false,                                                            /* Docgen by Typedoc. */
  // docsDirectory: 'docs',                                                    /* Docs directory. */
  // entrypointTypes: undefined,                                               /* The .d.ts file that includes the type declarations for this module. */
  // eslint: true,                                                             /* Setup eslint. */
  // eslintOptions: undefined,                                                 /* Eslint options. */
  // libdir: 'lib',                                                            /* Typescript  artifacts output directory. */
  // package: true,                                                            /* Defines a `yarn package` command that will produce a tarball and place it under `dist/js`. */
  // sampleCode: true,                                                         /* Generate one-time sample in `src/` and `test/` if there are no files there. */
  // srcdir: 'src',                                                            /* Typescript sources directory. */
  // testdir: 'test',                                                          /* Jest tests directory. Tests files should be named `xxx.test.ts`. */
  // tsconfig: undefined,                                                      /* Custom TSConfig. */
  // typescriptVersion: 'latest',                                              /* TypeScript version to use. */
});

project.eslint.addRules({
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
});

const deployWorkflow = project.github.addWorkflow('Deploy');
deployWorkflow.on({
  push: {
    branches: [
      'main',
      'staging',
      'prod',
    ],
  },
});

const awsCredentialSetting = 'if [[ \${GITHUB_REF} == "refs/heads/main" ]]; then ' + '\n' +
                              'echo "AWS_ACCESS_KEY_ID=${DEV_AWS_ACCESS_KEY_ID}" >> $GITHUB_ENV' + '\n' +
                              'echo "AWS_SECRET_ACCESS_KEY=${DEV_AWS_SECRET_KEY}" >> $GITHUB_ENV' + '\n' +
                              'echo "CDK_DEFAULT_ACCOUNT=${DEV_CDK_DEFAULT_ACCOUNT}" >> $GITHUB_ENV' + '\n' +
                              'echo "STAGE=${DEV_STAGE}" >> $GITHUB_ENV' + '\n' +
                              'fi' + '\n' +
                              'if [[ \${GITHUB_REF} == "refs/heads/staging" ]]; then ' + '\n' +
                              'echo "AWS_ACCESS_KEY_ID=${STG_AWS_ACCESS_KEY_ID}" >> $GITHUB_ENV' + '\n' +
                              'echo "AWS_SECRET_ACCESS_KEY=${STG_AWS_SECRET_KEY}" >> $GITHUB_ENV' + '\n' +
                              'echo "CDK_DEFAULT_ACCOUNT=${STG_CDK_DEFAULT_ACCOUNT}" >> $GITHUB_ENV' + '\n' +
                              'echo "STAGE=${STG_STAGE}" >> $GITHUB_ENV' + '\n' +
                              'fi' + '\n' +
                              'if [[ \${GITHUB_REF} == "refs/heads/prod" ]]; then ' + '\n' +
                              'echo "AWS_ACCESS_KEY_ID=${PROD_AWS_ACCESS_KEY_ID}" >> $GITHUB_ENV' + '\n' +
                              'echo "AWS_SECRET_ACCESS_KEY=${PROD_AWS_SECRET_KEY}" >> $GITHUB_ENV' + '\n' +
                              'echo "CDK_DEFAULT_ACCOUNT=${PROD_CDK_DEFAULT_ACCOUNT}" >> $GITHUB_ENV' + '\n' +
                              'echo "STAGE=${STG_STAGE}" >> $PROD_STAGE' + '\n' +
                              'fi' + '\n';

deployWorkflow.addJobs({
  aws_cdk: {
    'runs-on': 'ubuntu-latest',
    'steps':
      [
        {
          name: 'checkout',
          uses: 'actions/checkout@v2',
        },
        {
          name: 'Set AWS Credential',
          run: awsCredentialSetting,
          shell: 'bash',
        },
        {
          name: 'debug',
          run: 'echo STAGE: ${{ env.STAGE }}',
        },
        {
          name: 'install',
          run: 'sudo npm i -g aws-cdk@' + project.cdkVersion,
        },
        {
          name: 'build',
          run: 'npm run build',
        },
        {
          name: 'deploy',
          run: 'cdk deploy --require-approval never',
        },
      ],
    'env': {
      AWS_DEFAULT_REGION: 'ap-northeast-1',
      CDK_DEFAULT_REGION: 'ap-northeast-1',
      DEV_AWS_ACCESS_KEY_ID: '${{ secrets.DEV_AWS_ACCESS_KEY_ID }}',
      DEV_AWS_SECRET_KEY: '${{ secrets.DEV_AWS_SECRET_KEY }}',
      DEV_CDK_DEFAULT_ACCOUNT: '${{ secrets.DEV_CDK_DEFAULT_ACCOUNT }}',
      DEV_STAGE: '${{ secrets.DEV_STAGE }}',
    },
  },
});

project.synth();
