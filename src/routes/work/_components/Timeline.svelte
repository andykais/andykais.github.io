<script>
  export let timeline = []
  export let active = ''

  const yearCompanyMap = {}
  const yearsMap = new Map()
  for (const { company, durations } of timeline) {
    for (const { begin, end } of durations) {
      yearCompanyMap[begin.year] = yearCompanyMap[begin.year] || new Set()
      yearCompanyMap[begin.year].add(company)
      yearCompanyMap[end.year] = yearCompanyMap[begin.year] || new Set()
      yearCompanyMap[end.year].add(company)

      const beginMonthMap = yearsMap
        .set(begin.year, yearsMap.get(begin.year) || new Map())
        .get(begin.year)
      const beginMonthArray = beginMonthMap
        .set(begin.monthLong, beginMonthMap.get(begin.monthLong) || new Set())
        .get(begin.monthLong)
      beginMonthArray.add(company)

      const endMonthMap = yearsMap
        .set(end.year, yearsMap.get(end.year) || new Map())
        .get(end.year)
      const endMonthArray = endMonthMap
        .set(end.monthLong, endMonthMap.get(end.monthLong) || new Set())
        .get(end.monthLong)
      endMonthArray.add(company)
    }
  }
</script>

<style>
  h2 {
    font-weight: 100;
  }
  .active {
    font-weight: bold;
  }
</style>

{#each [...yearsMap] as [year, monthMap]}
  <div>
    <h2 class={yearCompanyMap[year].has(active) && 'active'}>{year}</h2>
    {#each [...monthMap] as [month, companies]}
      <div class={companies.has(active) && 'active'}>{month}</div>
    {/each}
  </div>
{/each}
