export const API_URL = 'http://localhost:5000';

export async function addIncome(data) {
  const res = await fetch(`${API_URL}/income`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function addExpense(data) {
  const res = await fetch(`${API_URL}/expense`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function getReport() {
  const res = await fetch(`${API_URL}/report`);
  return res.json();
}

