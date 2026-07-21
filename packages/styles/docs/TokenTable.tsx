import { useMemo } from 'react';

type Props = {
  prefix: string;
  preview?: boolean;
};

type Token = {
  name: string;
  value: string;
};

export default function TokenTable({ prefix, preview = false }: Props) {
  const tokens = useMemo(() => {
    const styles = getComputedStyle(document.documentElement);

    const result: Token[] = [];

    for (let i = 0; i < styles.length; i++) {
      const name = styles[i];

      if (!name.startsWith(prefix)) continue;

      result.push({
        name,
        value: styles.getPropertyValue(name).trim(),
      });
    }

    return result.sort((a, b) => a.name.localeCompare(b.name));
  }, [prefix]);

  return (
    <table>
      <tbody>
        {tokens.map((token) => (
          <tr key={token.name}>
            <td>
              <code>{token.name}</code>
            </td>
            <td>
              <code>{token.value}</code>
            </td>

            {preview && (
              <td>
                <div
                  style={{
                    width: 40,
                    height: 20,
                    background: token.value,
                    border: token.value === '#ffffff' ? '1px solid #ddd' : undefined,
                    borderRadius: 4,
                  }}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
