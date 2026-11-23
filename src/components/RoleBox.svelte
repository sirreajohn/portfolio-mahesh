<script>
  let { entries = [] } = $props();
  // entries: [{ label: "role", value: "software engineer" }, ...]
</script>

<div class="border border-gray-700 rounded p-4 text-sm">
  <table class="w-full">
    <tbody>
      {#each entries as entry}
        <tr class="border-b border-gray-800 last:border-0">
          <td class="py-2 pr-4 text-gray-500 whitespace-nowrap">{entry.label}</td>
          <td class="py-2 text-gray-300">
            <span class="text-gray-600 mr-1">/</span>{entry.value}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
