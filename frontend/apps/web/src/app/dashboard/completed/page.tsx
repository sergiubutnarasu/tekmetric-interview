import { Page } from '@tekmetric/components/page'
import { Questions } from '@tekmetric/components/questions'
import { QuestionStatus } from '@tekmetric/graphql'

const DashboardPage = (): JSX.Element => (
  <Page>
    <Page.Title>Completed Questions</Page.Title>

    <Page.Body>
      <Questions status={QuestionStatus.Completed} />
    </Page.Body>
  </Page>
)

export default DashboardPage
