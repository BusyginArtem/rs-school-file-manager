import { cpus } from "node:os";

export const handleCpus = () => {
  const cpusInfo = cpus().reduce((acc, { model, speed }) => {
    acc.push({
      model,
      speed: `${speed}MHz`,
    });

    return acc;
  }, []);

  console.log(`Amount of CPUS: ${cpus().length}`);
  console.table(cpusInfo);
};
