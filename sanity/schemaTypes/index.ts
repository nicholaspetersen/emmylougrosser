import { workshop } from './workshop'
import { presentation } from './presentation'
import { publication } from './publication'
import { resource } from './resource'
import { project } from './project'
import { faqItem } from './faqItem'
import { homePage } from './homePage'
import { bioPage } from './bioPage'
import { supportPage } from './supportPage'

export const schemaTypes = [
  // Page singletons
  homePage,
  bioPage,
  supportPage,
  // Content collections
  workshop,
  presentation,
  publication,
  resource,
  project,
  faqItem,
]
