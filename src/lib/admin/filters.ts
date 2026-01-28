type FirestoreDoc = Record<string, unknown>;

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isValidProjectDoc(data: FirestoreDoc) {
  return isNonEmptyString(data.title) && isNonEmptyString(data.slug);
}

export function isValidLeadDoc(data: FirestoreDoc) {
  return (
    isNonEmptyString(data.name) &&
    isNonEmptyString(data.email) &&
    isNonEmptyString(data.message)
  );
}
