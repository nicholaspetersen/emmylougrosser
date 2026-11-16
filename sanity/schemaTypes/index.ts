import { workshop } from './workshop'
import { presentation } from './presentation'
import { publication } from './publication'
import { resource } from './resource'
import { project } from './project'
import { faqItem } from './faqItem'
import { homePage } from './homePage'
import { bioPage } from './bioPage'
import { supportPage } from './supportPage'
import { resourcesPage } from './resourcesPage'

export const schemaTypes = [
  // Page singletons
  homePage,
  bioPage,
  supportPage,
  resourcesPage,
  // Content collections
  workshop,
  presentation,
  publication,
  resource,
  project,
  faqItem,
]
