import type { AccountSummary } from "../types/app";

// Keep the active account at the top; preserve import order for the rest.
export function sortAccountsForDisplay(accounts: AccountSummary[]): AccountSummary[] {
  return [...accounts].sort((left, right) => {
    if (left.isCurrent !== right.isCurrent) {
      return left.isCurrent ? -1 : 1;
    }

    return left.addedAt - right.addedAt || left.id.localeCompare(right.id);
  });
}
