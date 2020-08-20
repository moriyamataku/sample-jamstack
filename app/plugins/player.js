export function playerUrl(projectName, scenarioPath) {
  return (
    process.env.PLAYER_URL +
    `/player/step?project_name=${projectName}&scenario_path=${scenarioPath}&step=0`
  )
}
