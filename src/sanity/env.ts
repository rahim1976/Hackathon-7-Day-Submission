export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-14'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sknvTZi1WPSAEvPv6UqXZ6VY1hUsNPJorHONYWK5fov4ugwmTGVr0h4TEgwoGfMg6eUvt8EQqTnxMbFHEAPYxPfIz4WjgRc0Db6QgbjVnpuJWbdBONz9dYZhNz7BHdJFmLIoXjYXcDfQGYMJsdsSiqNlZHjDkhzznJhTwfH0oLv17pZzS4jl",
  'Missing environment variable: SANITY_API_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
