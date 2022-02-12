import { useFeatureFlag } from "./useFeatureFlag"

/**
 * Helper component for rendering feature-flag enabled content.
 *
 * @example
 *
 * import { FeatureFlag } from 'v2/System'
 *
 * const App = () => {
 *   return (
 *     <>
 *       <FeatureFlag name="foo">
 *         Foo is enabled.
 *       </FeatureFlag>
 *       <FeatureFlag name="bar">
 *          Bar is enabled.
 *       </FeatureFlag>
 *     </>
 *   )
 * }
 */
export const FeatureFlag: React.FC<{ name: string }> = ({ name, children }) => {
  const enabled = useFeatureFlag(name)

  if (!enabled) {
    return null
  }

  return <>{children}</>
}
